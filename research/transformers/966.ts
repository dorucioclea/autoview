import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
    /**
     * A migration.
     *
     * @title Migration
    */
    export type migration = {
        id: number & tags.Type<"int32">;
        owner: Schema.nullable_simple_user;
        guid: string;
        state: string;
        lock_repositories: boolean;
        exclude_metadata: boolean;
        exclude_git_data: boolean;
        exclude_attachments: boolean;
        exclude_releases: boolean;
        exclude_owner_projects: boolean;
        org_metadata_only: boolean;
        /**
         * The repositories included in the migration. Only returned for export migrations.
        */
        repositories: Schema.repository[];
        url: string & tags.Format<"uri">;
        created_at: string & tags.Format<"date-time">;
        updated_at: string & tags.Format<"date-time">;
        node_id: string;
        archive_url?: string & tags.Format<"uri">;
        /**
         * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
        */
        exclude?: string[];
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
        license: Schema.nullable_license_simple;
        forks: number & tags.Type<"int32">;
        permissions?: {
            admin: boolean;
            pull: boolean;
            triage?: boolean;
            push: boolean;
            maintain?: boolean;
        };
        owner: Schema.simple_user;
        /**
         * Whether the repository is private or public.
        */
        "private": boolean;
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
}
type IAutoViewTransformerInputType = Schema.migration;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // Prepare owner avatar or fallback icon if owner is null
  const ownerElement: IAutoView.IAutoViewAvatarProps | IAutoView.IAutoViewIconProps = input.owner
    ? {
        type: "Avatar",
        src: input.owner.avatar_url,
        name: input.owner.login,
        size: 40,
      }
    : {
        type: "Icon",
        id: "user-secret",
        size: 40,
        color: "gray",
      };

  // A chip to display the migration state
  const stateChip: IAutoView.IAutoViewChipProps = {
    type: "Chip",
    label: input.state,
    color: "info",
    size: "small",
    variant: "filled",
  };

  // Build a summary DataList of key migration fields
  const summaryItems: IAutoView.IAutoViewDataListItemProps[] = [
    {
      type: "DataListItem",
      label: { type: "Text", content: "GUID", variant: "subtitle3" },
      value: { type: "Text", content: input.guid, variant: "body2" },
    },
    {
      type: "DataListItem",
      label: { type: "Text", content: "Created At", variant: "subtitle3" },
      value: {
        type: "Text",
        // Format date-time for readability
        content: new Date(input.created_at).toLocaleString(),
        variant: "body2",
      },
    },
    {
      type: "DataListItem",
      label: { type: "Text", content: "Updated At", variant: "subtitle3" },
      value: {
        type: "Text",
        content: new Date(input.updated_at).toLocaleString(),
        variant: "body2",
      },
    },
    {
      type: "DataListItem",
      label: { type: "Text", content: "Repositories", variant: "subtitle3" },
      value: { type: "Text", content: `${input.repositories.length}`, variant: "body2" },
    },
  ];
  const summaryDataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps: summaryItems,
  };

  // Build a DataList of repositories, each with a chip group for metrics
  const repoItems: IAutoView.IAutoViewDataListItemProps[] = input.repositories.map((repo) => {
    // Forks chip
    const forksChip: IAutoView.IAutoViewChipProps = {
      type: "Chip",
      label: repo.forks.toString(),
      startElement: { type: "Icon", id: "code-branch", size: 16, color: "green" },
      size: "small",
      variant: "outlined",
      color: "green",
    };
    // Stars chip
    const starsChip: IAutoView.IAutoViewChipProps = {
      type: "Chip",
      label: repo.stargazers_count.toString(),
      startElement: { type: "Icon", id: "star", size: 16, color: "yellow" },
      size: "small",
      variant: "outlined",
      color: "yellow",
    };
    // Watchers chip
    const watchersChip: IAutoView.IAutoViewChipProps = {
      type: "Chip",
      label: repo.watchers_count.toString(),
      startElement: { type: "Icon", id: "eye", size: 16, color: "blue" },
      size: "small",
      variant: "outlined",
      color: "blue",
    };

    const metricsGroup: IAutoView.IAutoViewChipGroupProps = {
      type: "ChipGroup",
      childrenProps: [forksChip, starsChip, watchersChip],
      maxItems: 3,
    };

    return {
      type: "DataListItem",
      label: { type: "Text", content: repo.name, variant: "body1" },
      value: metricsGroup,
    };
  });
  const repoDataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps: repoItems,
  };

  // Footer buttons: archive download and GitHub link
  const footerButtons: IAutoView.IAutoViewButtonProps[] = [];
  if (input.archive_url) {
    footerButtons.push({
      type: "Button",
      label: "Download Archive",
      href: input.archive_url,
      variant: "contained",
      color: "blue",
      size: "medium",
      startElement: { type: "Icon", id: "download", size: 20, color: "blue" },
    });
  }
  footerButtons.push({
    type: "Button",
    label: "View on GitHub",
    href: input.url,
    variant: "outlined",
    color: "teal",
    size: "medium",
    startElement: { type: "Icon", id: "github", size: 20, color: "gray" },
  });
  const footer: IAutoView.IAutoViewCardFooterProps = {
    type: "CardFooter",
    childrenProps: footerButtons,
  };

  // Assemble into a vertical card for a responsive, mobile‑friendly layout
  return {
    type: "VerticalCard",
    childrenProps: [
      {
        type: "CardHeader",
        title: `Migration #${input.id}`,
        description: `State: ${input.state}`,
        startElement: ownerElement,
        endElement: stateChip,
      },
      {
        type: "CardContent",
        childrenProps: [summaryDataList, repoDataList],
      },
      footer,
    ],
  };
}
