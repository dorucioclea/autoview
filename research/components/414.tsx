import * as LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  export namespace IApiOrgsActionsSecretsRepositories {
    export type GetResponse = {
      total_count: number & tags.Type<"int32">;
      repositories: AutoViewInputSubTypes.minimal_repository[];
    };
  }
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
export type AutoViewInput =
  AutoViewInputSubTypes.IApiOrgsActionsSecretsRepositories.GetResponse;

export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // Derived constants
  const totalRepos = value.total_count;

  // Helper to format ISO date strings
  const formatDate = (iso?: string | null): string =>
    iso
      ? new Date(iso).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  return (
    <div className="p-4">
      <div className="text-lg font-semibold text-gray-900">
        Total Repositories: {totalRepos}
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {value.repositories.map((repo) => (
          <li
            key={repo.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            {/* Repository name & privacy */}
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold text-gray-800 truncate">
                {repo.full_name}
              </h3>
              {repo.private ? (
                <LucideReact.Lock
                  className="text-gray-500"
                  size={16}
                  aria-label="Private repository"
                />
              ) : (
                <LucideReact.Unlock
                  className="text-gray-500"
                  size={16}
                  aria-label="Public repository"
                />
              )}
            </div>

            {/* Owner avatar and login */}
            <div className="flex items-center gap-2 mt-2">
              <img
                src={repo.owner.avatar_url}
                alt={`${repo.owner.login} avatar`}
                loading="lazy"
                className="w-6 h-6 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    repo.owner.login,
                  )}&background=0D8ABC&color=fff`;
                }}
              />
              <span className="text-sm text-gray-600">{repo.owner.login}</span>
            </div>

            {/* Description */}
            {repo.description && (
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                {repo.description}
              </p>
            )}

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Stats: stars, forks, issues, updated */}
            <div className="mt-3 flex flex-wrap items-center text-gray-500 text-sm gap-4">
              <div className="flex items-center gap-1">
                <LucideReact.Star
                  size={14}
                  className="text-amber-400"
                  aria-label="Stars"
                />
                <span>{repo.stargazers_count ?? 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <LucideReact.GitBranch size={14} aria-label="Forks" />
                <span>{repo.forks_count ?? 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <LucideReact.AlertCircle size={14} aria-label="Open issues" />
                <span>{repo.open_issues_count ?? 0}</span>
              </div>
              {repo.updated_at && (
                <div className="flex items-center gap-1">
                  <LucideReact.Calendar size={14} aria-label="Last updated" />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
