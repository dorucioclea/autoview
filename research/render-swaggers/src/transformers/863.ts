import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
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
        enforcement: Schema.repository_rule_enforcement;
        /**
         * The actors that can bypass the rules in this ruleset
        */
        bypass_actors?: Schema.repository_ruleset_bypass_actor[];
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
        conditions?: any | any | null;
        rules?: Schema.repository_rule[];
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
        actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey";
        /**
         * When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests. `pull_request` is not applicable for the `DeployKey` actor type. Also, `pull_request` is only applicable to branch rulesets.
        */
        bypass_mode?: "always" | "pull_request";
    };
    export type repository_ruleset_conditions = any;
    export type org_ruleset_conditions = any;
    /**
     * A repository rule.
     *
     * @title Repository Rule
    */
    export type repository_rule = any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any;
    export type repository_rule_creation = any;
    export type repository_rule_update = any;
    export type repository_rule_deletion = any;
    export type repository_rule_required_linear_history = any;
    export type repository_rule_merge_queue = any;
    export type repository_rule_required_deployments = any;
    export type repository_rule_required_signatures = any;
    export type repository_rule_pull_request = any;
    export type repository_rule_required_status_checks = any;
    export type repository_rule_non_fast_forward = any;
    export type repository_rule_commit_message_pattern = any;
    export type repository_rule_commit_author_email_pattern = any;
    export type repository_rule_committer_email_pattern = any;
    export type repository_rule_branch_name_pattern = any;
    export type repository_rule_tag_name_pattern = any;
    export type repository_rule_file_path_restriction = any;
    export type repository_rule_max_file_path_length = any;
    export type repository_rule_file_extension_restriction = any;
    export type repository_rule_max_file_size = any;
    export type repository_rule_workflows = any;
    export type repository_rule_code_scanning = any;
}
type IAutoViewTransformerInputType = Schema.repository_ruleset;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // Helper to create a DataListItem from a label and a value component
  const makeItem = (
    label: string,
    value: IAutoView.IAutoViewPresentationComponentProps
  ): IAutoView.IAutoViewDataListItemProps => ({
    type: "DataListItem",
    label: { type: "Text", content: label, variant: "subtitle2" },
    value,
  });

  // Build the list of properties dynamically, skipping undefined ones
  const items: IAutoView.IAutoViewDataListItemProps[] = [];

  // ID
  items.push(
    makeItem(
      "Ruleset ID",
      { type: "Text", content: `${input.id}`, variant: "body2" }
    )
  );

  // Target
  if (input.target) {
    items.push(
      makeItem(
        "Target",
        {
          type: "Chip",
          label: input.target,
          variant: "outlined",
          color: "primary"
        }
      )
    );
  }

  // Source type and source
  if (input.source_type) {
    items.push(
      makeItem(
        "Source Type",
        { type: "Text", content: input.source_type, variant: "body2" }
      )
    );
  }
  items.push(
    makeItem(
      "Source",
      { type: "Text", content: input.source, variant: "body2" }
    )
  );

  // Enforcement level, highlight with Chip
  items.push(
    makeItem(
      "Enforcement",
      {
        type: "Chip",
        label: input.enforcement,
        color:
          input.enforcement === "active"
            ? "success"
            : input.enforcement === "evaluate"
            ? "warning"
            : "gray",
        variant: "filled"
      }
    )
  );

  // Bypass actors count (optional array)
  if (Array.isArray(input.bypass_actors)) {
    items.push(
      makeItem(
        "Bypass Actors",
        {
          type: "Text",
          content: `${input.bypass_actors.length}`,
          variant: "body2"
        }
      )
    );
  }

  // Current user can bypass
  if (input.current_user_can_bypass) {
    items.push(
      makeItem(
        "You Can Bypass",
        {
          type: "Chip",
          label: input.current_user_can_bypass,
          variant: "outlined",
          color: "secondary"
        }
      )
    );
  }

  // Dates
  if (input.created_at) {
    items.push(
      makeItem(
        "Created",
        {
          type: "Text",
          content: new Date(input.created_at).toLocaleString(),
          variant: "caption"
        }
      )
    );
  }
  if (input.updated_at) {
    items.push(
      makeItem(
        "Updated",
        {
          type: "Text",
          content: new Date(input.updated_at).toLocaleString(),
          variant: "caption"
        }
      )
    );
  }

  // Rules count if present
  if (Array.isArray(input.rules)) {
    items.push(
      makeItem(
        "Rules",
        {
          type: "Chip",
          label: `${input.rules.length}`,
          variant: "filled",
          color: "info"
        }
      )
    );
  }

  // Compose the DataList component
  const dataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps: items
  };

  // Header with the ruleset name and an icon
  const header: IAutoView.IAutoViewCardHeaderProps = {
    type: "CardHeader",
    title: input.name,
    description: `ID: ${input.id}`,
    startElement: {
      type: "Icon",
      id: "cog",
      size: 28,
      color: "cyan"
    }
  };

  // CardContent wrapping the DataList
  const content: IAutoView.IAutoViewCardContentProps = {
    type: "CardContent",
    childrenProps: dataList
  };

  // Return a VerticalCard composed of header and content
  return {
    type: "VerticalCard",
    childrenProps: [header, content]
  };
}
