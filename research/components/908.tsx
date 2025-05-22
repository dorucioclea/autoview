import LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * A team discussion is a persistent record of a free-form conversation within a team.
   *
   * @title Team Discussion
   */
  export type team_discussion = {
    author: AutoViewInputSubTypes.nullable_simple_user;
    /**
     * The main text of the discussion.
     */
    body: string;
    body_html: string;
    /**
     * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     */
    body_version: string;
    comments_count: number & tags.Type<"int32">;
    comments_url: string & tags.Format<"uri">;
    created_at: string & tags.Format<"date-time">;
    last_edited_at: (string & tags.Format<"date-time">) | null;
    html_url: string & tags.Format<"uri">;
    node_id: string;
    /**
     * The unique sequence number of a team discussion.
     */
    number: number & tags.Type<"int32">;
    /**
     * Whether or not this discussion should be pinned for easy retrieval.
     */
    pinned: boolean;
    /**
     * Whether or not this discussion should be restricted to team members and organization owners.
     */
    private: boolean;
    team_url: string & tags.Format<"uri">;
    /**
     * The title of the discussion.
     */
    title: string;
    updated_at: string & tags.Format<"date-time">;
    url: string & tags.Format<"uri">;
    reactions?: AutoViewInputSubTypes.reaction_rollup;
  };
  /**
   * A GitHub user.
   *
   * @title Simple User
   */
  export type nullable_simple_user = {
    name?: string | null;
    email?: string | null;
    login: string;
    id: number & tags.Type<"int32">;
    node_id: string;
    avatar_url: string & tags.Format<"uri">;
    gravatar_id: string | null;
    url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    followers_url: string & tags.Format<"uri">;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string & tags.Format<"uri">;
    organizations_url: string & tags.Format<"uri">;
    repos_url: string & tags.Format<"uri">;
    events_url: string;
    received_events_url: string & tags.Format<"uri">;
    type: string;
    site_admin: boolean;
    starred_at?: string;
    user_view_type?: string;
  } | null;
  /**
   * @title Reaction Rollup
   */
  export type reaction_rollup = {
    url: string & tags.Format<"uri">;
    total_count: number & tags.Type<"int32">;
    "+1": number & tags.Type<"int32">;
    "-1": number & tags.Type<"int32">;
    laugh: number & tags.Type<"int32">;
    confused: number & tags.Type<"int32">;
    heart: number & tags.Type<"int32">;
    hooray: number & tags.Type<"int32">;
    eyes: number & tags.Type<"int32">;
    rocket: number & tags.Type<"int32">;
  };
}
export type AutoViewInput = AutoViewInputSubTypes.team_discussion;

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const author = value.author;
  const authorName = author?.name ?? author?.login ?? "Unknown";
  const avatarSrc =
    author?.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      authorName,
    )}&background=0D8ABC&color=fff`;
  const handleImgError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      authorName,
    )}&background=0D8ABC&color=fff`;
  };
  const formattedCreated = new Date(value.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );
  const formattedEdited = value.last_edited_at
    ? new Date(value.last_edited_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <h2 className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
          <span className="truncate">{value.title}</span>
          {value.pinned && (
            <LucideReact.Pin className="text-yellow-500" size={16} />
          )}
          {value.private && (
            <LucideReact.Lock className="text-gray-500" size={16} />
          )}
        </h2>
        <span className="text-sm text-gray-500">#{value.number}</span>
      </div>

      <div className="flex items-center mt-3 space-x-3">
        <img
          src={avatarSrc}
          alt={authorName}
          onError={handleImgError}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 truncate">
            {authorName}
          </span>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <LucideReact.Calendar size={12} />
            <span>{formattedCreated}</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-3">{value.body}</p>

      <div className="flex items-center justify-between mt-4 text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <LucideReact.MessageCircle size={16} />
            <span className="text-sm">{value.comments_count}</span>
          </div>
          {value.reactions && (
            <div className="flex items-center space-x-1">
              <LucideReact.Heart className="text-red-500" size={16} />
              <span className="text-sm">{value.reactions.total_count}</span>
            </div>
          )}
        </div>
        {formattedEdited && (
          <span className="text-xs italic text-gray-400">
            Edited {formattedEdited}
          </span>
        )}
      </div>
    </div>
  );
}
