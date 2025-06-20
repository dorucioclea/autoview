import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    /**
     * A GitHub user.
     *
     * @title Simple User
    */
    export interface simple_user {
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
    }
}
export type AutoViewInput = AutoViewInputSubTypes.simple_user[];



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const users = value;

  // Placeholder when no data is provided
  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-gray-500">
        <LucideReact.AlertCircle size={48} />
        <p className="mt-2 text-lg">No users available</p>
      </div>
    );
  }

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {users.map((user) => {
        const displayName = user.name?.trim() || user.login;
        const profileUrlText = user.html_url;
        const isAdmin = user.site_admin;

        return (
          <div
            key={user.id}
            className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Avatar */}
            <div className="w-full aspect-square bg-gray-100 overflow-hidden">
              <img
                src={user.avatar_url}
                alt={`${displayName} avatar`}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    displayName,
                  )}&background=cccccc&color=ffffff`;
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {displayName}
                </h3>
                {displayName !== user.login && (
                  <p className="text-sm text-gray-500 truncate">
                    @{user.login}
                  </p>
                )}
              </div>
              <div className="mt-3 space-y-2">
                {user.email && (
                  <div className="flex items-center text-sm text-gray-600">
                    <LucideReact.Mail size={16} className="mr-1 text-gray-400" />
                    <span className="truncate">{user.email}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600">
                  <LucideReact.Link size={16} className="mr-1 text-gray-400" />
                  <span className="truncate">{profileUrlText}</span>
                </div>
              </div>
            </div>

            {/* Site Admin Badge */}
            {isAdmin && (
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <LucideReact.CheckCircle
                  size={20}
                  className="text-green-500"
                  aria-label="Site Admin"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
