import * as LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * A set of rules to apply when specified conditions are met.
   *
   * @title Repository ruleset
   */
  export type repository_ruleset = {
    /**
     * The ID of the ruleset
     */
    id: number & tags.Type<"int32">;
    /**
     * The name of the ruleset
     */
    name: string;
    /**
     * The target of the ruleset
     */
    target?: "branch" | "tag" | "push" | "repository";
    /**
     * The type of the source of the ruleset
     */
    source_type?: "Repository" | "Organization" | "Enterprise";
    /**
     * The name of the source
     */
    source: string;
    enforcement: AutoViewInputSubTypes.repository_rule_enforcement;
    /**
     * The actors that can bypass the rules in this ruleset
     */
    bypass_actors?: AutoViewInputSubTypes.repository_ruleset_bypass_actor[];
    /**
     * The bypass type of the user making the API request for this ruleset. This field is only returned when
     * querying the repository-level endpoint.
     */
    current_user_can_bypass?: "always" | "pull_requests_only" | "never";
    node_id?: string;
    _links?: {
      self?: {
        /**
         * The URL of the ruleset
         */
        href?: string;
      };
      html?: {
        /**
         * The html URL of the ruleset
         */
        href?: string;
      } | null;
    };
    conditions?:
      | AutoViewInputSubTypes.repository_ruleset_conditions
      | AutoViewInputSubTypes.org_ruleset_conditions
      | null;
    rules?: AutoViewInputSubTypes.repository_rule[];
    created_at?: string & tags.Format<"date-time">;
    updated_at?: string & tags.Format<"date-time">;
  };
  /**
   * The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise).
   */
  export type repository_rule_enforcement = "disabled" | "active" | "evaluate";
  /**
   * An actor that can bypass rules in a ruleset
   *
   * @title Repository Ruleset Bypass Actor
   */
  export type repository_ruleset_bypass_actor = {
    /**
     * The ID of the actor that can bypass a ruleset. If `actor_type` is `OrganizationAdmin`, this should be `1`. If `actor_type` is `DeployKey`, this should be null. `OrganizationAdmin` is not applicable for personal repositories.
     */
    actor_id?: (number & tags.Type<"int32">) | null;
    /**
     * The type of actor that can bypass a ruleset.
     */
    actor_type:
      | "Integration"
      | "OrganizationAdmin"
      | "RepositoryRole"
      | "Team"
      | "DeployKey";
    /**
     * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests. `pull_request` is not applicable for the `DeployKey` actor type. Also, `pull_request` is only applicable to branch rulesets.
     */
    bypass_mode?: "always" | "pull_request";
  };
  /**
   * Parameters for a repository ruleset ref name condition
   *
   * @title Repository ruleset conditions for ref names
   */
  export type repository_ruleset_conditions = {
    ref_name?: {
      /**
       * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
       */
      include?: string[];
      /**
       * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
       */
      exclude?: string[];
    };
  };
  /**
   * Conditions for an organization ruleset.
   * The branch and tag rulesets conditions object should contain both `repository_name` and `ref_name` properties, or both `repository_id` and `ref_name` properties, or both `repository_property` and `ref_name` properties.
   * The push rulesets conditions object does not require the `ref_name` property.
   * For repository policy rulesets, the conditions object should only contain the `repository_name`, the `repository_id`, or the `repository_property`.
   *
   * @title Organization ruleset conditions
   */
  export type org_ruleset_conditions =
    | {
        ref_name?: {
          /**
           * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
           */
          include?: string[];
          /**
           * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
           */
          exclude?: string[];
        };
        repository_name: {
          /**
           * Array of repository names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.
           */
          include?: string[];
          /**
           * Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.
           */
          exclude?: string[];
          /**
           * Whether renaming of target repositories is prevented.
           */
          protected?: boolean;
        };
      }
    | {
        ref_name?: {
          /**
           * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
           */
          include?: string[];
          /**
           * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
           */
          exclude?: string[];
        };
        repository_id: {
          /**
           * The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.
           */
          repository_ids?: (number & tags.Type<"int32">)[];
        };
      }
    | {
        ref_name?: {
          /**
           * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
           */
          include?: string[];
          /**
           * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
           */
          exclude?: string[];
        };
        repository_property: {
          /**
           * The repository properties and values to include. All of these properties must match for the condition to pass.
           */
          include?: AutoViewInputSubTypes.repository_ruleset_conditions_repository_property_spec[];
          /**
           * The repository properties and values to exclude. The condition will not pass if any of these properties match.
           */
          exclude?: AutoViewInputSubTypes.repository_ruleset_conditions_repository_property_spec[];
        };
      };
  /**
   * Parameters for a targeting a repository property
   *
   * @title Repository ruleset property targeting definition
   */
  export type repository_ruleset_conditions_repository_property_spec = {
    /**
     * The name of the repository property to target
     */
    name: string;
    /**
     * The values to match for the repository property
     */
    property_values: string[];
    /**
     * The source of the repository property. Defaults to 'custom' if not specified.
     */
    source?: "custom" | "system";
  };
  /**
   * A repository rule.
   *
   * @title Repository Rule
   */
  export type repository_rule =
    | AutoViewInputSubTypes.repository_rule_creation
    | AutoViewInputSubTypes.repository_rule_update
    | AutoViewInputSubTypes.repository_rule_deletion
    | AutoViewInputSubTypes.repository_rule_required_linear_history
    | AutoViewInputSubTypes.repository_rule_merge_queue
    | AutoViewInputSubTypes.repository_rule_required_deployments
    | AutoViewInputSubTypes.repository_rule_required_signatures
    | AutoViewInputSubTypes.repository_rule_pull_request
    | AutoViewInputSubTypes.repository_rule_required_status_checks
    | AutoViewInputSubTypes.repository_rule_non_fast_forward
    | AutoViewInputSubTypes.repository_rule_commit_message_pattern
    | AutoViewInputSubTypes.repository_rule_commit_author_email_pattern
    | AutoViewInputSubTypes.repository_rule_committer_email_pattern
    | AutoViewInputSubTypes.repository_rule_branch_name_pattern
    | AutoViewInputSubTypes.repository_rule_tag_name_pattern
    | AutoViewInputSubTypes.repository_rule_file_path_restriction
    | AutoViewInputSubTypes.repository_rule_max_file_path_length
    | AutoViewInputSubTypes.repository_rule_file_extension_restriction
    | AutoViewInputSubTypes.repository_rule_max_file_size
    | AutoViewInputSubTypes.repository_rule_workflows
    | AutoViewInputSubTypes.repository_rule_code_scanning;
  /**
   * Only allow users with bypass permission to create matching refs.
   *
   * @title creation
   */
  export type repository_rule_creation = {
    type: "creation";
  };
  /**
   * Only allow users with bypass permission to update matching refs.
   *
   * @title update
   */
  export type repository_rule_update = {
    type: "update";
    parameters?: {
      /**
       * Branch can pull changes from its upstream repository
       */
      update_allows_fetch_and_merge: boolean;
    };
  };
  /**
   * Only allow users with bypass permissions to delete matching refs.
   *
   * @title deletion
   */
  export type repository_rule_deletion = {
    type: "deletion";
  };
  /**
   * Prevent merge commits from being pushed to matching refs.
   *
   * @title required_linear_history
   */
  export type repository_rule_required_linear_history = {
    type: "required_linear_history";
  };
  /**
   * Merges must be performed via a merge queue.
   *
   * @title merge_queue
   */
  export type repository_rule_merge_queue = {
    type: "merge_queue";
    parameters?: {
      /**
       * Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed
       */
      check_response_timeout_minutes: number & tags.Type<"int32">;
      /**
       * When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge. When set to HEADGREEN, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge.
       */
      grouping_strategy: "ALLGREEN" | "HEADGREEN";
      /**
       * Limit the number of queued pull requests requesting checks and workflow runs at the same time.
       */
      max_entries_to_build: number & tags.Type<"int32">;
      /**
       * The maximum number of PRs that will be merged together in a group.
       */
      max_entries_to_merge: number & tags.Type<"int32">;
      /**
       * Method to use when merging changes from queued pull requests.
       */
      merge_method: "MERGE" | "SQUASH" | "REBASE";
      /**
       * The minimum number of PRs that will be merged together in a group.
       */
      min_entries_to_merge: number & tags.Type<"int32">;
      /**
       * The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged.
       */
      min_entries_to_merge_wait_minutes: number & tags.Type<"int32">;
    };
  };
  /**
   * Choose which environments must be successfully deployed to before refs can be pushed into a ref that matches this rule.
   *
   * @title required_deployments
   */
  export type repository_rule_required_deployments = {
    type: "required_deployments";
    parameters?: {
      /**
       * The environments that must be successfully deployed to before branches can be merged.
       */
      required_deployment_environments: string[];
    };
  };
  /**
   * Commits pushed to matching refs must have verified signatures.
   *
   * @title required_signatures
   */
  export type repository_rule_required_signatures = {
    type: "required_signatures";
  };
  /**
   * Require all commits be made to a non-target branch and submitted via a pull request before they can be merged.
   *
   * @title pull_request
   */
  export type repository_rule_pull_request = {
    type: "pull_request";
    parameters?: {
      /**
       * Array of allowed merge methods. Allowed values include `merge`, `squash`, and `rebase`. At least one option must be enabled.
       */
      allowed_merge_methods?: ("merge" | "squash" | "rebase")[];
      /**
       * Automatically request review from Copilot for new pull requests, if the author has access to Copilot code review.
       */
      automatic_copilot_code_review_enabled?: boolean;
      /**
       * New, reviewable commits pushed will dismiss previous pull request review approvals.
       */
      dismiss_stale_reviews_on_push: boolean;
      /**
       * Require an approving review in pull requests that modify files that have a designated code owner.
       */
      require_code_owner_review: boolean;
      /**
       * Whether the most recent reviewable push must be approved by someone other than the person who pushed it.
       */
      require_last_push_approval: boolean;
      /**
       * The number of approving reviews that are required before a pull request can be merged.
       */
      required_approving_review_count: number & tags.Type<"int32">;
      /**
       * All conversations on code must be resolved before a pull request can be merged.
       */
      required_review_thread_resolution: boolean;
    };
  };
  /**
   * Choose which status checks must pass before the ref is updated. When enabled, commits must first be pushed to another ref where the checks pass.
   *
   * @title required_status_checks
   */
  export type repository_rule_required_status_checks = {
    type: "required_status_checks";
    parameters?: {
      /**
       * Allow repositories and branches to be created if a check would otherwise prohibit it.
       */
      do_not_enforce_on_create?: boolean;
      /**
       * Status checks that are required.
       */
      required_status_checks: AutoViewInputSubTypes.repository_rule_params_status_check_configuration[];
      /**
       * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.
       */
      strict_required_status_checks_policy: boolean;
    };
  };
  /**
   * Required status check
   *
   * @title StatusCheckConfiguration
   */
  export type repository_rule_params_status_check_configuration = {
    /**
     * The status check context name that must be present on the commit.
     */
    context: string;
    /**
     * The optional integration ID that this status check must originate from.
     */
    integration_id?: number & tags.Type<"int32">;
  };
  /**
   * Prevent users with push access from force pushing to refs.
   *
   * @title non_fast_forward
   */
  export type repository_rule_non_fast_forward = {
    type: "non_fast_forward";
  };
  /**
   * Parameters to be used for the commit_message_pattern rule
   *
   * @title commit_message_pattern
   */
  export type repository_rule_commit_message_pattern = {
    type: "commit_message_pattern";
    parameters?: {
      /**
       * How this rule will appear to users.
       */
      name?: string;
      /**
       * If true, the rule will fail if the pattern matches.
       */
      negate?: boolean;
      /**
       * The operator to use for matching.
       */
      operator: "starts_with" | "ends_with" | "contains" | "regex";
      /**
       * The pattern to match with.
       */
      pattern: string;
    };
  };
  /**
   * Parameters to be used for the commit_author_email_pattern rule
   *
   * @title commit_author_email_pattern
   */
  export type repository_rule_commit_author_email_pattern = {
    type: "commit_author_email_pattern";
    parameters?: {
      /**
       * How this rule will appear to users.
       */
      name?: string;
      /**
       * If true, the rule will fail if the pattern matches.
       */
      negate?: boolean;
      /**
       * The operator to use for matching.
       */
      operator: "starts_with" | "ends_with" | "contains" | "regex";
      /**
       * The pattern to match with.
       */
      pattern: string;
    };
  };
  /**
   * Parameters to be used for the committer_email_pattern rule
   *
   * @title committer_email_pattern
   */
  export type repository_rule_committer_email_pattern = {
    type: "committer_email_pattern";
    parameters?: {
      /**
       * How this rule will appear to users.
       */
      name?: string;
      /**
       * If true, the rule will fail if the pattern matches.
       */
      negate?: boolean;
      /**
       * The operator to use for matching.
       */
      operator: "starts_with" | "ends_with" | "contains" | "regex";
      /**
       * The pattern to match with.
       */
      pattern: string;
    };
  };
  /**
   * Parameters to be used for the branch_name_pattern rule
   *
   * @title branch_name_pattern
   */
  export type repository_rule_branch_name_pattern = {
    type: "branch_name_pattern";
    parameters?: {
      /**
       * How this rule will appear to users.
       */
      name?: string;
      /**
       * If true, the rule will fail if the pattern matches.
       */
      negate?: boolean;
      /**
       * The operator to use for matching.
       */
      operator: "starts_with" | "ends_with" | "contains" | "regex";
      /**
       * The pattern to match with.
       */
      pattern: string;
    };
  };
  /**
   * Parameters to be used for the tag_name_pattern rule
   *
   * @title tag_name_pattern
   */
  export type repository_rule_tag_name_pattern = {
    type: "tag_name_pattern";
    parameters?: {
      /**
       * How this rule will appear to users.
       */
      name?: string;
      /**
       * If true, the rule will fail if the pattern matches.
       */
      negate?: boolean;
      /**
       * The operator to use for matching.
       */
      operator: "starts_with" | "ends_with" | "contains" | "regex";
      /**
       * The pattern to match with.
       */
      pattern: string;
    };
  };
  /**
   * Prevent commits that include changes in specified file and folder paths from being pushed to the commit graph. This includes absolute paths that contain file names.
   *
   * @title file_path_restriction
   */
  export type repository_rule_file_path_restriction = {
    type: "file_path_restriction";
    parameters?: {
      /**
       * The file paths that are restricted from being pushed to the commit graph.
       */
      restricted_file_paths: string[];
    };
  };
  /**
   * Prevent commits that include file paths that exceed the specified character limit from being pushed to the commit graph.
   *
   * @title max_file_path_length
   */
  export type repository_rule_max_file_path_length = {
    type: "max_file_path_length";
    parameters?: {
      /**
       * The maximum amount of characters allowed in file paths.
       */
      max_file_path_length: number & tags.Type<"int32">;
    };
  };
  /**
   * Prevent commits that include files with specified file extensions from being pushed to the commit graph.
   *
   * @title file_extension_restriction
   */
  export type repository_rule_file_extension_restriction = {
    type: "file_extension_restriction";
    parameters?: {
      /**
       * The file extensions that are restricted from being pushed to the commit graph.
       */
      restricted_file_extensions: string[];
    };
  };
  /**
   * Prevent commits with individual files that exceed the specified limit from being pushed to the commit graph.
   *
   * @title max_file_size
   */
  export type repository_rule_max_file_size = {
    type: "max_file_size";
    parameters?: {
      /**
       * The maximum file size allowed in megabytes. This limit does not apply to Git Large File Storage (Git LFS).
       */
      max_file_size: number & tags.Type<"int32">;
    };
  };
  /**
   * Require all changes made to a targeted branch to pass the specified workflows before they can be merged.
   *
   * @title workflows
   */
  export type repository_rule_workflows = {
    type: "workflows";
    parameters?: {
      /**
       * Allow repositories and branches to be created if a check would otherwise prohibit it.
       */
      do_not_enforce_on_create?: boolean;
      /**
       * Workflows that must pass for this rule to pass.
       */
      workflows: AutoViewInputSubTypes.repository_rule_params_workflow_file_reference[];
    };
  };
  /**
   * A workflow that must run for this rule to pass
   *
   * @title WorkflowFileReference
   */
  export type repository_rule_params_workflow_file_reference = {
    /**
     * The path to the workflow file
     */
    path: string;
    /**
     * The ref (branch or tag) of the workflow file to use
     */
    ref?: string;
    /**
     * The ID of the repository where the workflow is defined
     */
    repository_id: number & tags.Type<"int32">;
    /**
     * The commit SHA of the workflow file to use
     */
    sha?: string;
  };
  /**
   * Choose which tools must provide code scanning results before the reference is updated. When configured, code scanning must be enabled and have results for both the commit and the reference being updated.
   *
   * @title code_scanning
   */
  export type repository_rule_code_scanning = {
    type: "code_scanning";
    parameters?: {
      /**
       * Tools that must provide code scanning results for this rule to pass.
       */
      code_scanning_tools: AutoViewInputSubTypes.repository_rule_params_code_scanning_tool[];
    };
  };
  /**
   * A tool that must provide code scanning results for this rule to pass.
   *
   * @title CodeScanningTool
   */
  export type repository_rule_params_code_scanning_tool = {
    /**
     * The severity level at which code scanning results that raise alerts block a reference update. For more information on alert severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."
     */
    alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all";
    /**
     * The severity level at which code scanning results that raise security alerts block a reference update. For more information on security severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."
     */
    security_alerts_threshold:
      | "none"
      | "critical"
      | "high_or_higher"
      | "medium_or_higher"
      | "all";
    /**
     * The name of a code scanning tool
     */
    tool: string;
  };
}
export type AutoViewInput = AutoViewInputSubTypes.repository_ruleset[];

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const rulesets = value;
  const formatDate = (dateStr?: string): string =>
    dateStr
      ? new Date(dateStr).toLocaleString(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "-";

  const renderEnforcement = (
    enforcement: AutoViewInputSubTypes.repository_rule_enforcement,
  ): React.ReactNode => {
    switch (enforcement) {
      case "active":
        return (
          <div className="flex items-center text-green-600">
            <LucideReact.CheckCircle size={16} className="stroke-current" />
            <span className="ml-1 text-sm font-medium">Active</span>
          </div>
        );
      case "evaluate":
        return (
          <div className="flex items-center text-amber-500">
            <LucideReact.Clock size={16} className="stroke-current" />
            <span className="ml-1 text-sm font-medium">Evaluate</span>
          </div>
        );
      case "disabled":
      default:
        return (
          <div className="flex items-center text-gray-400">
            <LucideReact.XCircle size={16} className="stroke-current" />
            <span className="ml-1 text-sm font-medium">Disabled</span>
          </div>
        );
    }
  };

  const renderTargetIcon = (
    target?: AutoViewInputSubTypes.repository_ruleset["target"],
  ): React.ReactNode => {
    switch (target) {
      case "branch":
        return <LucideReact.GitBranch size={16} className="text-gray-400" />;
      case "tag":
        return <LucideReact.Tag size={16} className="text-gray-400" />;
      case "push":
        return <LucideReact.ArrowUp size={16} className="text-gray-400" />;
      case "repository":
      default:
        return <LucideReact.Archive size={16} className="text-gray-400" />;
    }
  };

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="space-y-4">
      {rulesets.length === 0 ? (
        <div className="flex items-center text-gray-500">
          <LucideReact.AlertCircle size={24} />
          <span className="ml-2">No rulesets available</span>
        </div>
      ) : (
        <ul className="space-y-4">
          {rulesets.map((rs) => (
            <li key={rs.id} className="p-4 bg-white rounded-lg shadow">
              {/* Header with name and enforcement */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {rs.name}
                </h3>
                {renderEnforcement(rs.enforcement)}
              </div>

              {/* Meta info: target, source, rule count, bypass */}
              <div className="mt-2 flex flex-wrap items-center text-sm text-gray-600 gap-4">
                <div className="flex items-center gap-1">
                  {renderTargetIcon(rs.target)}
                  <span>
                    {rs.target
                      ? rs.target.charAt(0).toUpperCase() + rs.target.slice(1)
                      : "All Targets"}
                  </span>
                </div>
                {rs.source && (
                  <div className="flex items-center gap-1">
                    <LucideReact.Link size={16} className="text-gray-400" />
                    <span>{rs.source}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <LucideReact.ListChecks size={16} className="text-gray-400" />
                  <span>
                    {rs.rules?.length ?? 0} rule
                    {rs.rules && rs.rules.length !== 1 ? "s" : ""}
                  </span>
                </div>
                {rs.current_user_can_bypass && (
                  <div className="flex items-center gap-1">
                    <LucideReact.Unlock size={16} className="text-gray-400" />
                    <span>
                      {rs.current_user_can_bypass === "always"
                        ? "Bypass: Always"
                        : rs.current_user_can_bypass === "never"
                          ? "Bypass: Never"
                          : "Bypass: Pull Requests"}
                    </span>
                  </div>
                )}
              </div>

              {/* Conditions summary */}
              {rs.conditions?.ref_name &&
                (rs.conditions.ref_name.include ||
                  rs.conditions.ref_name.exclude) && (
                  <div className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Ref Name Conditions:</span>
                    {rs.conditions.ref_name.include && (
                      <div className="ml-4">
                        <span className="font-medium">Include:</span>{" "}
                        {rs.conditions.ref_name.include.join(", ")}
                      </div>
                    )}
                    {rs.conditions.ref_name.exclude && (
                      <div className="ml-4">
                        <span className="font-medium">Exclude:</span>{" "}
                        {rs.conditions.ref_name.exclude.join(", ")}
                      </div>
                    )}
                  </div>
                )}

              {/* Timestamps */}
              <div className="mt-4 flex flex-wrap text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <LucideReact.Calendar size={16} />
                  <span>Created: {formatDate(rs.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LucideReact.Edit2 size={16} />
                  <span>Updated: {formatDate(rs.updated_at)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
