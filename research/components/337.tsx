import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    /**
     * Repositories associated with a code security configuration and attachment status
    */
    export interface code_security_configuration_repositories {
        /**
         * The attachment status of the code security configuration on the repository.
        */
        status?: "attached" | "attaching" | "detached" | "removed" | "enforced" | "failed" | "updating" | "removed_by_enterprise";
        repository?: AutoViewInputSubTypes.simple_repository;
    }
    /**
     * A GitHub repository.
     *
     * @title Simple Repository
    */
    export interface simple_repository {
        /**
         * A unique identifier of the repository.
        */
        id: number & tags.Type<"int32">;
        /**
         * The GraphQL identifier of the repository.
        */
        node_id: string;
        /**
         * The name of the repository.
        */
        name: string;
        /**
         * The full, globally unique, name of the repository.
        */
        full_name: string;
        owner: AutoViewInputSubTypes.simple_user;
        /**
         * Whether the repository is private.
        */
        "private": boolean;
        /**
         * The URL to view the repository on GitHub.com.
        */
        html_url: string;
        /**
         * The repository description.
        */
        description: string | null;
        /**
         * Whether the repository is a fork.
        */
        fork: boolean;
        /**
         * The URL to get more information about the repository from the GitHub API.
        */
        url: string;
        /**
         * A template for the API URL to download the repository as an archive.
        */
        archive_url: string;
        /**
         * A template for the API URL to list the available assignees for issues in the repository.
        */
        assignees_url: string;
        /**
         * A template for the API URL to create or retrieve a raw Git blob in the repository.
        */
        blobs_url: string;
        /**
         * A template for the API URL to get information about branches in the repository.
        */
        branches_url: string;
        /**
         * A template for the API URL to get information about collaborators of the repository.
        */
        collaborators_url: string;
        /**
         * A template for the API URL to get information about comments on the repository.
        */
        comments_url: string;
        /**
         * A template for the API URL to get information about commits on the repository.
        */
        commits_url: string;
        /**
         * A template for the API URL to compare two commits or refs.
        */
        compare_url: string;
        /**
         * A template for the API URL to get the contents of the repository.
        */
        contents_url: string;
        /**
         * A template for the API URL to list the contributors to the repository.
        */
        contributors_url: string;
        /**
         * The API URL to list the deployments of the repository.
        */
        deployments_url: string;
        /**
         * The API URL to list the downloads on the repository.
        */
        downloads_url: string;
        /**
         * The API URL to list the events of the repository.
        */
        events_url: string;
        /**
         * The API URL to list the forks of the repository.
        */
        forks_url: string;
        /**
         * A template for the API URL to get information about Git commits of the repository.
        */
        git_commits_url: string;
        /**
         * A template for the API URL to get information about Git refs of the repository.
        */
        git_refs_url: string;
        /**
         * A template for the API URL to get information about Git tags of the repository.
        */
        git_tags_url: string;
        /**
         * A template for the API URL to get information about issue comments on the repository.
        */
        issue_comment_url: string;
        /**
         * A template for the API URL to get information about issue events on the repository.
        */
        issue_events_url: string;
        /**
         * A template for the API URL to get information about issues on the repository.
        */
        issues_url: string;
        /**
         * A template for the API URL to get information about deploy keys on the repository.
        */
        keys_url: string;
        /**
         * A template for the API URL to get information about labels of the repository.
        */
        labels_url: string;
        /**
         * The API URL to get information about the languages of the repository.
        */
        languages_url: string;
        /**
         * The API URL to merge branches in the repository.
        */
        merges_url: string;
        /**
         * A template for the API URL to get information about milestones of the repository.
        */
        milestones_url: string;
        /**
         * A template for the API URL to get information about notifications on the repository.
        */
        notifications_url: string;
        /**
         * A template for the API URL to get information about pull requests on the repository.
        */
        pulls_url: string;
        /**
         * A template for the API URL to get information about releases on the repository.
        */
        releases_url: string;
        /**
         * The API URL to list the stargazers on the repository.
        */
        stargazers_url: string;
        /**
         * A template for the API URL to get information about statuses of a commit.
        */
        statuses_url: string;
        /**
         * The API URL to list the subscribers on the repository.
        */
        subscribers_url: string;
        /**
         * The API URL to subscribe to notifications for this repository.
        */
        subscription_url: string;
        /**
         * The API URL to get information about tags on the repository.
        */
        tags_url: string;
        /**
         * The API URL to list the teams on the repository.
        */
        teams_url: string;
        /**
         * A template for the API URL to create or retrieve a raw Git tree of the repository.
        */
        trees_url: string;
        /**
         * The API URL to list the hooks on the repository.
        */
        hooks_url: string;
    }
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
export type AutoViewInput = AutoViewInputSubTypes.code_security_configuration_repositories[];



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const statusMap: Record<string, {
    Icon: React.ComponentType<any>;
    label: string;
    colorClass: string;
    spin?: boolean;
  }> = {
    attached: { Icon: LucideReact.CheckCircle, label: "Attached", colorClass: "text-green-500" },
    attaching: { Icon: LucideReact.Loader, label: "Attaching", colorClass: "text-blue-500", spin: true },
    detached: { Icon: LucideReact.XCircle, label: "Detached", colorClass: "text-yellow-500" },
    removed: { Icon: LucideReact.Trash2, label: "Removed", colorClass: "text-red-500" },
    enforced: { Icon: LucideReact.ShieldCheck, label: "Enforced", colorClass: "text-green-600" },
    failed: { Icon: LucideReact.AlertTriangle, label: "Failed", colorClass: "text-red-500" },
    updating: { Icon: LucideReact.RefreshCw, label: "Updating", colorClass: "text-blue-500", spin: true },
    removed_by_enterprise: {
      Icon: LucideReact.Briefcase,
      label: "Removed by Enterprise",
      colorClass: "text-gray-500"
    }
  };

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  if (!value || value.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-gray-500">
        <LucideReact.AlertCircle size={48} className="mb-2" />
        <span className="text-lg">No repository data available</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {value.map((item, index) => {
        const repo = item.repository;
        const repoName = repo?.full_name ?? repo?.name ?? "Unknown Repository";
        const description = repo?.description;
        const statusKey = item.status ?? "";
        const meta = statusMap[statusKey] ?? {
          Icon: LucideReact.HelpCircle,
          label: "Unknown",
          colorClass: "text-gray-400"
        };

        const owner = repo?.owner;
        const avatarSrc =
          owner?.avatar_url ??
          `https://ui-avatars.com/api/?name=${encodeURIComponent(owner?.login ?? "")}&background=random&color=fff`;

        return (
          <div
            key={repo?.id ?? index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{repoName}</h3>
              <meta.Icon
                size={16}
                className={`${meta.colorClass} ${meta.spin ? "animate-spin" : ""}`}
                aria-label={meta.label}
              />
            </div>
            {owner && (
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <img
                  src={avatarSrc}
                  alt={owner.login}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      owner.login
                    )}&background=random&color=fff`;
                  }}
                  className="w-6 h-6 rounded-full object-cover mr-2"
                />
                <span className="truncate">{owner.login}</span>
              </div>
            )}
            {description != null && (
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">{description}</p>
            )}
            {repo?.html_url && (
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <LucideReact.Link size={16} className="mr-1" />
                <span className="truncate">{repo.html_url}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
