import * as LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * Repository invitations let you manage who you collaborate with.
   *
   * @title Repository Invitation
   */
  export type repository_invitation = {
    /**
     * Unique identifier of the repository invitation.
     */
    id: number & tags.Type<"int32">;
    repository: AutoViewInputSubTypes.minimal_repository;
    invitee: AutoViewInputSubTypes.nullable_simple_user;
    inviter: AutoViewInputSubTypes.nullable_simple_user;
    /**
     * The permission associated with the invitation.
     */
    permissions: "read" | "write" | "admin" | "triage" | "maintain";
    created_at: string & tags.Format<"date-time">;
    /**
     * Whether or not the invitation has expired
     */
    expired?: boolean;
    /**
     * URL for the repository invitation
     */
    url: string;
    html_url: string;
    node_id: string;
  };
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
export type AutoViewInput = AutoViewInputSubTypes.repository_invitation;

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const { repository, invitee, inviter, permissions, created_at, expired } =
    value;
  const formattedDate: string = new Date(created_at).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const statusText = expired ? "Expired" : "Active";
  const statusIcon = expired ? (
    <LucideReact.XCircle className="text-red-500" size={16} />
  ) : (
    <LucideReact.CheckCircle className="text-green-500" size={16} />
  );
  const permissionIcons: Record<string, JSX.Element> = {
    read: <LucideReact.Eye size={16} className="text-gray-500" />,
    write: <LucideReact.Edit size={16} className="text-gray-500" />,
    admin: <LucideReact.ShieldCheck size={16} className="text-gray-500" />,
    triage: <LucideReact.Tag size={16} className="text-gray-500" />,
    maintain: <LucideReact.Settings size={16} className="text-gray-500" />,
  };
  const permissionIcon = permissionIcons[permissions] ?? (
    <LucideReact.Key size={16} className="text-gray-500" />
  );
  // Avatar fallbacks
  const inviterFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    inviter?.login ?? "Unknown",
  )}&background=0D8ABC&color=fff`;
  const inviteeFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    invitee?.login ?? "Unknown",
  )}&background=0D8ABC&color=fff`;

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="max-w-sm w-full bg-white p-4 rounded-lg shadow-md space-y-4">
      {/* Repository Info */}
      <div className="flex items-start gap-3">
        <LucideReact.GitBranch
          size={24}
          className="text-gray-600 mt-1 flex-shrink-0"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {repository.full_name}
          </h2>
          {repository.description && (
            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
              {repository.description}
            </p>
          )}
        </div>
      </div>
      {/* Permission and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {permissionIcon}
          <span className="text-sm text-gray-700 capitalize">
            {permissions}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {statusIcon}
          <span
            className={`text-sm font-medium ${
              expired ? "text-red-600" : "text-green-600"
            }`}
          >
            {statusText}
          </span>
        </div>
      </div>
      {/* Inviter & Invitee */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="block text-xs font-medium text-gray-500">
            Inviter
          </span>
          <div className="flex items-center gap-2 mt-1">
            <img
              src={inviter?.avatar_url ?? inviterFallback}
              alt="Inviter avatar"
              className="w-6 h-6 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = inviterFallback;
              }}
            />
            <span className="text-sm text-gray-700 truncate">
              {inviter?.login ?? "Unknown"}
            </span>
          </div>
        </div>
        <div>
          <span className="block text-xs font-medium text-gray-500">
            Invitee
          </span>
          <div className="flex items-center gap-2 mt-1">
            <img
              src={invitee?.avatar_url ?? inviteeFallback}
              alt="Invitee avatar"
              className="w-6 h-6 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = inviteeFallback;
              }}
            />
            <span className="text-sm text-gray-700 truncate">
              {invitee?.login ?? "Unknown"}
            </span>
          </div>
        </div>
      </div>
      {/* Invitation Date */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <LucideReact.Calendar size={16} />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}
