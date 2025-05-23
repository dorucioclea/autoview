import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    /**
     * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
     *
     * @title Reaction
    */
    export interface reaction {
        id: number & tags.Type<"int32">;
        node_id: string;
        user: AutoViewInputSubTypes.nullable_simple_user;
        /**
         * The reaction to use
        */
        content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
        created_at: string & tags.Format<"date-time">;
    }
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
}
export type AutoViewInput = AutoViewInputSubTypes.reaction[];



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants.
  type ReactionContent = AutoViewInputSubTypes.reaction["content"];
  const reactionOrder: ReactionContent[] = [
    "+1",
    "-1",
    "laugh",
    "confused",
    "heart",
    "hooray",
    "rocket",
    "eyes",
  ];
  const counts = value.reduce((acc, reaction) => {
    const key = reaction.content as ReactionContent;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {} as Record<ReactionContent, number>);

  const iconMap: Record<
    ReactionContent,
    { Icon: React.FC<React.SVGProps<SVGSVGElement>>; colorClass: string }
  > = {
    "+1": { Icon: LucideReact.ThumbsUp, colorClass: "text-green-500" },
    "-1": { Icon: LucideReact.ThumbsDown, colorClass: "text-red-500" },
    laugh: { Icon: LucideReact.Smile, colorClass: "text-yellow-400" },
    confused: { Icon: LucideReact.HelpCircle, colorClass: "text-amber-500" },
    heart: { Icon: LucideReact.Heart, colorClass: "text-red-500" },
    hooray: { Icon: LucideReact.Trophy, colorClass: "text-yellow-500" },
    rocket: { Icon: LucideReact.Rocket, colorClass: "text-indigo-500" },
    eyes: { Icon: LucideReact.Eye, colorClass: "text-gray-500" },
  };

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  if (value.length === 0) {
    return (
      <div className="flex items-center justify-center p-4 text-gray-500">
        <LucideReact.AlertCircle width={24} height={24} />
        <span className="ml-2">No reactions</span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        {reactionOrder.map((content) => {
          const count = counts[content];
          if (!count) return null;
          const { Icon, colorClass } = iconMap[content];
          return (
            <div key={content} className="flex items-center space-x-1">
              <Icon width={20} height={20} className={colorClass} />
              <span className="text-sm font-medium text-gray-700">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
