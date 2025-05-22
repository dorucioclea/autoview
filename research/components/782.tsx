import LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
   *
   * @title Issue
   */
  export type issue = {
    id: number & tags.Type<"int32">;
    node_id: string;
    /**
     * URL for the issue
     */
    url: string;
    repository_url: string & tags.Format<"uri">;
    labels_url: string;
    comments_url: string & tags.Format<"uri">;
    events_url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    /**
     * Number uniquely identifying the issue within its repository
     */
    number: number & tags.Type<"int32">;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state: string;
    /**
     * The reason for the current state
     */
    state_reason?: "completed" | "reopened" | "not_planned" | null;
    /**
     * Title of the issue
     */
    title: string;
    /**
     * Contents of the issue
     */
    body?: string | null;
    user: AutoViewInputSubTypes.nullable_simple_user;
    /**
     * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
     */
    labels: (
      | string
      | {
          id?: number & tags.Type<"int32">;
          node_id?: string;
          url?: string & tags.Format<"uri">;
          name?: string;
          description?: string | null;
          color?: string | null;
          default?: boolean;
        }
    )[];
    assignee: AutoViewInputSubTypes.nullable_simple_user;
    assignees?: AutoViewInputSubTypes.simple_user[] | null;
    milestone: AutoViewInputSubTypes.nullable_milestone;
    locked: boolean;
    active_lock_reason?: string | null;
    comments: number & tags.Type<"int32">;
    pull_request?: {
      merged_at?: (string & tags.Format<"date-time">) | null;
      diff_url: (string & tags.Format<"uri">) | null;
      html_url: (string & tags.Format<"uri">) | null;
      patch_url: (string & tags.Format<"uri">) | null;
      url: (string & tags.Format<"uri">) | null;
    };
    closed_at: (string & tags.Format<"date-time">) | null;
    created_at: string & tags.Format<"date-time">;
    updated_at: string & tags.Format<"date-time">;
    draft?: boolean;
    closed_by?: AutoViewInputSubTypes.nullable_simple_user;
    body_html?: string;
    body_text?: string;
    timeline_url?: string & tags.Format<"uri">;
    type?: AutoViewInputSubTypes.issue_type;
    repository?: AutoViewInputSubTypes.repository;
    performed_via_github_app?: AutoViewInputSubTypes.nullable_integration;
    author_association: AutoViewInputSubTypes.author_association;
    reactions?: AutoViewInputSubTypes.reaction_rollup;
    sub_issues_summary?: AutoViewInputSubTypes.sub_issues_summary;
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
   * A collection of related issues and pull requests.
   *
   * @title Milestone
   */
  export type nullable_milestone = {
    url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    labels_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    node_id: string;
    /**
     * The number of the milestone.
     */
    number: number & tags.Type<"int32">;
    /**
     * The state of the milestone.
     */
    state: "open" | "closed";
    /**
     * The title of the milestone.
     */
    title: string;
    description: string | null;
    creator: AutoViewInputSubTypes.nullable_simple_user;
    open_issues: number & tags.Type<"int32">;
    closed_issues: number & tags.Type<"int32">;
    created_at: string & tags.Format<"date-time">;
    updated_at: string & tags.Format<"date-time">;
    closed_at: (string & tags.Format<"date-time">) | null;
    due_on: (string & tags.Format<"date-time">) | null;
  } | null;
  /**
   * The type of issue.
   *
   * @title Issue Type
   */
  export type issue_type = {
    /**
     * The unique identifier of the issue type.
     */
    id: number & tags.Type<"int32">;
    /**
     * The node identifier of the issue type.
     */
    node_id: string;
    /**
     * The name of the issue type.
     */
    name: string;
    /**
     * The description of the issue type.
     */
    description: string | null;
    /**
     * The color of the issue type.
     */
    color?:
      | "gray"
      | "blue"
      | "green"
      | "yellow"
      | "orange"
      | "red"
      | "pink"
      | "purple"
      | null;
    /**
     * The time the issue type created.
     */
    created_at?: string;
    /**
     * The time the issue type last updated.
     */
    updated_at?: string;
    /**
     * The enabled state of the issue type.
     */
    is_enabled?: boolean;
  } | null;
  /**
   * A repository on GitHub.
   *
   * @title Repository
   */
  export type repository = {
    /**
     * Unique identifier of the repository
     */
    id: number & tags.Type<"int32">;
    node_id: string;
    /**
     * The name of the repository.
     */
    name: string;
    full_name: string;
    license: AutoViewInputSubTypes.nullable_license_simple;
    forks: number & tags.Type<"int32">;
    permissions?: {
      admin: boolean;
      pull: boolean;
      triage?: boolean;
      push: boolean;
      maintain?: boolean;
    };
    owner: AutoViewInputSubTypes.simple_user;
    /**
     * Whether the repository is private or public.
     */
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
    git_url: string;
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
    ssh_url: string;
    stargazers_url: string & tags.Format<"uri">;
    statuses_url: string;
    subscribers_url: string & tags.Format<"uri">;
    subscription_url: string & tags.Format<"uri">;
    tags_url: string & tags.Format<"uri">;
    teams_url: string & tags.Format<"uri">;
    trees_url: string;
    clone_url: string;
    mirror_url: (string & tags.Format<"uri">) | null;
    hooks_url: string & tags.Format<"uri">;
    svn_url: string & tags.Format<"uri">;
    homepage: (string & tags.Format<"uri">) | null;
    language: string | null;
    forks_count: number & tags.Type<"int32">;
    stargazers_count: number & tags.Type<"int32">;
    watchers_count: number & tags.Type<"int32">;
    /**
     * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size: number & tags.Type<"int32">;
    /**
     * The default branch of the repository.
     */
    default_branch: string;
    open_issues_count: number & tags.Type<"int32">;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    is_template?: boolean;
    topics?: string[];
    /**
     * Whether issues are enabled.
     */
    has_issues: boolean;
    /**
     * Whether projects are enabled.
     */
    has_projects: boolean;
    /**
     * Whether the wiki is enabled.
     */
    has_wiki: boolean;
    has_pages: boolean;
    /**
     * Whether downloads are enabled.
     *
     * @deprecated
     */
    has_downloads: boolean;
    /**
     * Whether discussions are enabled.
     */
    has_discussions?: boolean;
    /**
     * Whether the repository is archived.
     */
    archived: boolean;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string & tags.Default<"public">;
    pushed_at: (string & tags.Format<"date-time">) | null;
    created_at: (string & tags.Format<"date-time">) | null;
    updated_at: (string & tags.Format<"date-time">) | null;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allow_rebase_merge?: boolean;
    temp_clone_token?: string;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allow_squash_merge?: boolean;
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allow_auto_merge?: boolean;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean;
    /**
     * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
     */
    allow_update_branch?: boolean;
    /**
     * Whether a squash merge commit can use the pull request title as default. **This property is closing down. Please use `squash_merge_commit_title` instead.
     *
     * @deprecated
     */
    use_squash_pr_title_as_default?: boolean;
    /**
     * The default value for a squash merge commit title:
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
    /**
     * The default value for a squash merge commit message:
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
    /**
     * The default value for a merge commit title.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
    /**
     * The default value for a merge commit message.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
    /**
     * Whether to allow merge commits for pull requests.
     */
    allow_merge_commit?: boolean;
    /**
     * Whether to allow forking this repo
     */
    allow_forking?: boolean;
    /**
     * Whether to require contributors to sign off on web-based commits
     */
    web_commit_signoff_required?: boolean;
    open_issues: number & tags.Type<"int32">;
    watchers: number & tags.Type<"int32">;
    master_branch?: string;
    starred_at?: string;
    /**
     * Whether anonymous git access is enabled for this repository
     */
    anonymous_access_enabled?: boolean;
  };
  /**
   * License Simple
   *
   * @title License Simple
   */
  export type nullable_license_simple = {
    key: string;
    name: string;
    url: (string & tags.Format<"uri">) | null;
    spdx_id: string | null;
    node_id: string;
    html_url?: string & tags.Format<"uri">;
  } | null;
  /**
   * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
   *
   * @title GitHub app
   */
  export type nullable_integration = {
    /**
     * Unique identifier of the GitHub app
     */
    id: number & tags.Type<"int32">;
    /**
     * The slug name of the GitHub app
     */
    slug?: string;
    node_id: string;
    client_id?: string;
    owner: AutoViewInputSubTypes.simple_user | AutoViewInputSubTypes.enterprise;
    /**
     * The name of the GitHub app
     */
    name: string;
    description: string | null;
    external_url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    created_at: string & tags.Format<"date-time">;
    updated_at: string & tags.Format<"date-time">;
    /**
     * The set of permissions for the GitHub app
     */
    permissions: {
      [key: string]: string;
    };
    /**
     * The list of events for the GitHub app
     */
    events: string[];
    /**
     * The number of installations associated with the GitHub app
     */
    installations_count?: number & tags.Type<"int32">;
    client_secret?: string;
    webhook_secret?: string | null;
    pem?: string;
  } | null;
  /**
   * An enterprise on GitHub.
   *
   * @title Enterprise
   */
  export type enterprise = {
    /**
     * A short description of the enterprise.
     */
    description?: string | null;
    html_url: string & tags.Format<"uri">;
    /**
     * The enterprise's website URL.
     */
    website_url?: (string & tags.Format<"uri">) | null;
    /**
     * Unique identifier of the enterprise
     */
    id: number & tags.Type<"int32">;
    node_id: string;
    /**
     * The name of the enterprise.
     */
    name: string;
    /**
     * The slug url identifier for the enterprise.
     */
    slug: string;
    created_at: (string & tags.Format<"date-time">) | null;
    updated_at: (string & tags.Format<"date-time">) | null;
    avatar_url: string & tags.Format<"uri">;
  };
  /**
   * How the author is associated with the repository.
   *
   * @title author_association
   */
  export type author_association =
    | "COLLABORATOR"
    | "CONTRIBUTOR"
    | "FIRST_TIMER"
    | "FIRST_TIME_CONTRIBUTOR"
    | "MANNEQUIN"
    | "MEMBER"
    | "NONE"
    | "OWNER";
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
  /**
   * @title Sub-issues Summary
   */
  export type sub_issues_summary = {
    total: number & tags.Type<"int32">;
    completed: number & tags.Type<"int32">;
    percent_completed: number & tags.Type<"int32">;
  };
}
export type AutoViewInput = AutoViewInputSubTypes.issue;

export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Data transformation & derived values
  const formattedCreatedAt = new Date(value.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );
  const bodyText = value.body_text?.trim() ?? value.body ?? "";
  const bodySummary = bodyText
    ? bodyText.length > 200
      ? `${bodyText.slice(0, 200)}…`
      : bodyText
    : null;
  const labels = (value.labels ?? [])
    .map((lbl) => (typeof lbl === "string" ? lbl : (lbl.name ?? "")))
    .filter(Boolean);
  const assigneesList = (value.assignees ??
    (value.assignee
      ? [value.assignee]
      : [])) as AutoViewInputSubTypes.simple_user[];
  const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    value.user?.login ?? "",
  )}&background=0D8ABC&color=fff`;
  const assigneeFallback = (u: AutoViewInputSubTypes.simple_user) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(u.login)}&background=64748b&color=fff`;

  // 2. JSX structure
  return (
    <div className="p-4 bg-white rounded-lg shadow transition hover:shadow-md">
      {/* Header: State, Number, Milestone, Comments */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {value.state === "open" ? (
            <LucideReact.Circle className="text-green-500" size={16} />
          ) : (
            <LucideReact.CheckCircle className="text-red-500" size={16} />
          )}
          <span className="text-sm font-medium text-gray-600 capitalize">
            {value.state}
          </span>
          <span className="text-sm text-gray-500">#{value.number}</span>
        </div>
        <div className="flex items-center space-x-4">
          {value.milestone && (
            <div className="flex items-center text-sm text-gray-500">
              <LucideReact.Flag size={16} />
              <span className="ml-1">{value.milestone.title}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-gray-500">
            <LucideReact.MessageCircle size={16} />
            <span className="ml-1">{value.comments}</span>
          </div>
        </div>
      </div>

      {/* Title & Repository */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800">
        {value.title}
      </h2>
      {value.repository?.full_name && (
        <div className="mt-1 text-sm text-gray-500">
          in {value.repository.full_name}
        </div>
      )}

      {/* Author & Date */}
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <img
          src={value.user?.avatar_url || avatarFallback}
          alt={`${value.user?.login} avatar`}
          className="w-5 h-5 rounded-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = avatarFallback;
          }}
        />
        <span className="ml-2">{value.user?.login}</span>
        <LucideReact.Calendar className="ml-4" size={16} />
        <time className="ml-1">{formattedCreatedAt}</time>
      </div>

      {/* Body preview */}
      {bodySummary && (
        <p className="mt-3 text-sm text-gray-700 line-clamp-3">{bodySummary}</p>
      )}

      {/* Labels & Assignees */}
      {(labels.length > 0 || assigneesList.length > 0) && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {labels.map((lbl, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-800 rounded"
            >
              {lbl}
            </span>
          ))}
          {assigneesList.map((assignee, i) => (
            <img
              key={i}
              src={assignee.avatar_url}
              alt={`${assignee.login} avatar`}
              title={assignee.login}
              className="w-5 h-5 rounded-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  assigneeFallback(assignee);
              }}
            />
          ))}
        </div>
      )}

      {/* Key reactions */}
      {value.reactions && (
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          {value.reactions["+1"] > 0 && (
            <div className="flex items-center">
              <LucideReact.ThumbsUp size={16} />
              <span className="ml-1">{value.reactions["+1"]}</span>
            </div>
          )}
          {value.reactions.heart > 0 && (
            <div className="flex items-center">
              <LucideReact.Heart size={16} />
              <span className="ml-1">{value.reactions.heart}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
