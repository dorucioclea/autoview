import LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * Minimal Repository
   *
   * @title Minimal Repository
   */
  export type minimal_repository = {
    id: number & tags.Type<"int32">;
    node_id: string;
    name: string;
    full_name: string;
    owner: AutoViewInputSubTypes.simple_user;
    private: boolean;
    html_url: string & tags.Format<"uri">;
    description: string | null;
    fork: boolean;
    url: string & tags.Format<"uri">;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string & tags.Format<"uri">;
    deployments_url: string & tags.Format<"uri">;
    downloads_url: string & tags.Format<"uri">;
    events_url: string & tags.Format<"uri">;
    forks_url: string & tags.Format<"uri">;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url?: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string & tags.Format<"uri">;
    merges_url: string & tags.Format<"uri">;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url?: string;
    stargazers_url: string & tags.Format<"uri">;
    statuses_url: string;
    subscribers_url: string & tags.Format<"uri">;
    subscription_url: string & tags.Format<"uri">;
    tags_url: string & tags.Format<"uri">;
    teams_url: string & tags.Format<"uri">;
    trees_url: string;
    clone_url?: string;
    mirror_url?: string | null;
    hooks_url: string & tags.Format<"uri">;
    svn_url?: string;
    homepage?: string | null;
    language?: string | null;
    forks_count?: number & tags.Type<"int32">;
    stargazers_count?: number & tags.Type<"int32">;
    watchers_count?: number & tags.Type<"int32">;
    /**
     * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size?: number & tags.Type<"int32">;
    default_branch?: string;
    open_issues_count?: number & tags.Type<"int32">;
    is_template?: boolean;
    topics?: string[];
    has_issues?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    has_downloads?: boolean;
    has_discussions?: boolean;
    archived?: boolean;
    disabled?: boolean;
    visibility?: string;
    pushed_at?: (string & tags.Format<"date-time">) | null;
    created_at?: (string & tags.Format<"date-time">) | null;
    updated_at?: (string & tags.Format<"date-time">) | null;
    permissions?: {
      admin?: boolean;
      maintain?: boolean;
      push?: boolean;
      triage?: boolean;
      pull?: boolean;
    };
    role_name?: string;
    temp_clone_token?: string;
    delete_branch_on_merge?: boolean;
    subscribers_count?: number & tags.Type<"int32">;
    network_count?: number & tags.Type<"int32">;
    code_of_conduct?: AutoViewInputSubTypes.code_of_conduct;
    license?: {
      key?: string;
      name?: string;
      spdx_id?: string;
      url?: string;
      node_id?: string;
    } | null;
    forks?: number & tags.Type<"int32">;
    open_issues?: number & tags.Type<"int32">;
    watchers?: number & tags.Type<"int32">;
    allow_forking?: boolean;
    web_commit_signoff_required?: boolean;
    security_and_analysis?: AutoViewInputSubTypes.security_and_analysis;
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
   * Code Of Conduct
   *
   * @title Code Of Conduct
   */
  export type code_of_conduct = {
    key: string;
    name: string;
    url: string & tags.Format<"uri">;
    body?: string;
    html_url: (string & tags.Format<"uri">) | null;
  };
  export type security_and_analysis = {
    advanced_security?: {
      status?: "enabled" | "disabled";
    };
    code_security?: {
      status?: "enabled" | "disabled";
    };
    /**
     * Enable or disable Dependabot security updates for the repository.
     */
    dependabot_security_updates?: {
      /**
       * The enablement status of Dependabot security updates for the repository.
       */
      status?: "enabled" | "disabled";
    };
    secret_scanning?: {
      status?: "enabled" | "disabled";
    };
    secret_scanning_push_protection?: {
      status?: "enabled" | "disabled";
    };
    secret_scanning_non_provider_patterns?: {
      status?: "enabled" | "disabled";
    };
    secret_scanning_ai_detection?: {
      status?: "enabled" | "disabled";
    };
  } | null;
}
export type AutoViewInput = AutoViewInputSubTypes.minimal_repository[];

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  const repos = value;
  // Empty state
  if (!repos || repos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <LucideReact.AlertCircle
          size={48}
          className="text-gray-400"
          aria-label="No repositories"
        />
        <p className="mt-4 text-gray-500">No repositories available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Repositories ({repos.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => {
          const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            repo.owner.login,
          )}&background=0D8ABC&color=fff`;

          return (
            <div
              key={repo.id}
              className="flex flex-col p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header: avatar, name, owner, visibility */}
              <div className="flex items-center mb-2">
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.owner.login}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = avatarFallback;
                  }}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-gray-900 font-medium truncate">
                    {repo.name}
                  </h3>
                  <p className="text-gray-500 text-sm truncate">
                    {repo.owner.login}
                  </p>
                </div>
                {repo.private ? (
                  <LucideReact.Lock
                    size={16}
                    className="text-red-500 ml-2"
                    aria-label="Private repository"
                  />
                ) : (
                  <LucideReact.Globe
                    size={16}
                    className="text-green-500 ml-2"
                    aria-label="Public repository"
                  />
                )}
              </div>

              {/* Description */}
              {repo.description && (
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {repo.description}
                </p>
              )}

              {/* Metrics & Details */}
              <div className="mt-auto">
                <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
                  {typeof repo.stargazers_count === "number" && (
                    <div className="flex items-center">
                      <LucideReact.Star
                        size={16}
                        className="text-yellow-500"
                        aria-label="Stars"
                      />
                      <span className="ml-1">{repo.stargazers_count}</span>
                    </div>
                  )}
                  {typeof repo.forks_count === "number" && (
                    <div className="flex items-center">
                      <LucideReact.GitBranch
                        size={16}
                        className="text-gray-500"
                        aria-label="Forks"
                      />
                      <span className="ml-1">{repo.forks_count}</span>
                    </div>
                  )}
                  {typeof repo.watchers_count === "number" && (
                    <div className="flex items-center">
                      <LucideReact.Eye
                        size={16}
                        className="text-gray-500"
                        aria-label="Watchers"
                      />
                      <span className="ml-1">{repo.watchers_count}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center overflow-hidden">
                    <LucideReact.Link
                      size={16}
                      className="text-gray-400"
                      aria-label="Repository URL"
                    />
                    <span className="ml-1 truncate">{repo.html_url}</span>
                  </div>
                  {repo.language && (
                    <div className="flex items-center">
                      <LucideReact.Code
                        size={16}
                        className="text-gray-400"
                        aria-label="Primary language"
                      />
                      <span className="ml-1">{repo.language}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
