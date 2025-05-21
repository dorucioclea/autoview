import { tags } from "typia";
import React from "react";
export namespace AutoViewInputSubTypes {
    /**
     * A release.
     *
     * @title Release
    */
    export type release = {
        url: string & tags.Format<"uri">;
        html_url: string & tags.Format<"uri">;
        assets_url: string & tags.Format<"uri">;
        upload_url: string;
        tarball_url: (string & tags.Format<"uri">) | null;
        zipball_url: (string & tags.Format<"uri">) | null;
        id: number & tags.Type<"int32">;
        node_id: string;
        /**
         * The name of the tag.
        */
        tag_name: string;
        /**
         * Specifies the commitish value that determines where the Git tag is created from.
        */
        target_commitish: string;
        name: string | null;
        body?: string | null;
        /**
         * true to create a draft (unpublished) release, false to create a published one.
        */
        draft: boolean;
        /**
         * Whether to identify the release as a prerelease or a full release.
        */
        prerelease: boolean;
        created_at: string & tags.Format<"date-time">;
        published_at: (string & tags.Format<"date-time">) | null;
        author: AutoViewInputSubTypes.simple_user;
        assets: AutoViewInputSubTypes.release_asset[];
        body_html?: string;
        body_text?: string;
        mentions_count?: number & tags.Type<"int32">;
        /**
         * The URL of the release discussion.
        */
        discussion_url?: string;
        reactions?: AutoViewInputSubTypes.reaction_rollup;
    };
    /**
     * A GitHub user.
     *
     * @title Simple User
    */
    export type simple_user = {
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
    };
    /**
     * Data related to a release.
     *
     * @title Release Asset
    */
    export type release_asset = {
        url: string & tags.Format<"uri">;
        browser_download_url: string & tags.Format<"uri">;
        id: number & tags.Type<"int32">;
        node_id: string;
        /**
         * The file name of the asset.
        */
        name: string;
        label: string | null;
        /**
         * State of the release asset.
        */
        state: "uploaded" | "open";
        content_type: string;
        size: number & tags.Type<"int32">;
        download_count: number & tags.Type<"int32">;
        created_at: string & tags.Format<"date-time">;
        updated_at: string & tags.Format<"date-time">;
        uploader: AutoViewInputSubTypes.nullable_simple_user;
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
export type AutoViewInput = AutoViewInputSubTypes.release;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const title = value.name || value.tag_name;
  const formattedPublishedAt = value.published_at
    ? new Date(value.published_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unpublished";
  const authorLogin = value.author.login;
  const authorAvatar = value.author.avatar_url;
  const assetCount = value.assets.length;
  const totalDownloads = value.assets.reduce((sum, a) => sum + a.download_count, 0);
  const reactionsCount = value.reactions?.total_count ?? 0;
  const rawDescription = value.body_text ?? value.body ?? "";
  const descriptionPreview = rawDescription.trim()
    ? rawDescription
    : "No description provided.";

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Header with title and status badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={authorAvatar}
              alt={`${authorLogin}'s avatar`}
              className="h-10 w-10 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 truncate">
              {title}
            </h2>
          </div>
          <div className="flex space-x-2">
            {value.draft && (
              <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">
                Draft
              </span>
            )}
            {value.prerelease && (
              <span className="px-2 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
                Prerelease
              </span>
            )}
          </div>
        </div>

        {/* Meta info */}
        <p className="text-gray-500 text-sm">
          Published on {formattedPublishedAt} by {authorLogin}
        </p>

        {/* Description preview */}
        <p className="text-gray-700 text-sm line-clamp-3">
          {descriptionPreview}
        </p>

        {/* Metrics: assets, downloads, reactions */}
        <div className="flex justify-between text-center border-t pt-4">
          <div>
            <span className="block text-lg font-semibold text-gray-900">
              {assetCount}
            </span>
            <span className="text-gray-500 text-xs">Assets</span>
          </div>
          <div>
            <span className="block text-lg font-semibold text-gray-900">
              {totalDownloads}
            </span>
            <span className="text-gray-500 text-xs">Downloads</span>
          </div>
          {value.reactions && (
            <div>
              <span className="block text-lg font-semibold text-gray-900">
                {reactionsCount}
              </span>
              <span className="text-gray-500 text-xs">Reactions</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
