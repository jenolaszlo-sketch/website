export type Status =
  | 'experimental'
  | 'prototype'
  | 'preview'
  | 'stable'
  | 'parked';

export interface StatusDefinition {
  key: Status;
  label: string;
  description: string;
}

/**
 * Status vocabulary. A status is used only where the repository or the
 * published package line supports it. Definitions are shown to readers so the
 * labels are not decorative.
 */
export const STATUSES: StatusDefinition[] = [
  {
    key: 'experimental',
    label: 'Experimental',
    description:
      'Early exploration. The shape may change and it is not recommended for use.',
  },
  {
    key: 'prototype',
    label: 'Prototype',
    description:
      'Works end to end in narrow scenarios, but interfaces and behaviour are still changing.',
  },
  {
    key: 'preview',
    label: 'Preview',
    description:
      'Versioned preview packages are published and usable, but public APIs may still change.',
  },
  {
    key: 'stable',
    label: 'Stable',
    description: 'Released with a compatibility expectation.',
  },
  {
    key: 'parked',
    label: 'Parked',
    description: 'Development has stopped; the software is retained as-is.',
  },
];

export const STATUS_BY_KEY: Record<Status, StatusDefinition> = Object.fromEntries(
  STATUSES.map((status) => [status.key, status])
) as Record<Status, StatusDefinition>;

export interface Category {
  key: string;
  label: string;
  description: string;
  order: number;
}

/** Canonical capability taxonomy, used by the home page, architecture and projects. */
export const CATEGORIES: Category[] = [
  {
    key: 'core-execution',
    label: 'Core execution',
    description: 'Durable, deterministic execution of a plan.',
    order: 1,
  },
  {
    key: 'planning',
    label: 'Planning and workflow definition',
    description: 'How a workflow is authored, represented, and revised.',
    order: 2,
  },
  {
    key: 'authority-sandbox',
    label: 'Authority and sandbox',
    description: 'What is allowed to act, and where it is allowed to run.',
    order: 3,
  },
  {
    key: 'model-access',
    label: 'Model access',
    description: 'Provider-neutral access to models and structured output.',
    order: 4,
  },
  {
    key: 'evidence-memory',
    label: 'Evidence and memory',
    description: 'What happened, what was retained, and how it can be checked.',
    order: 5,
  },
  {
    key: 'supporting',
    label: 'Supporting primitives',
    description: 'Neutral contracts and reusable building blocks.',
    order: 6,
  },
  {
    key: 'parked',
    label: 'Parked',
    description: 'Development stopped; retained as-is.',
    order: 7,
  },
];

export const CATEGORY_BY_KEY: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((category) => [category.key, category])
);

export interface ProjectRef {
  label: string;
  href: string;
}

export interface RuntimeLayer {
  key: string;
  name: string;
  plain: string;
  detail: string;
  projects: ProjectRef[];
  /** Model access runs inside execution rather than as a sequential stage. */
  adjunct?: boolean;
}

/**
 * The runtime architecture, described in plain language before project names.
 * Supporting libraries are intentionally excluded; see SUPPORTING_PRIMITIVES.
 */
export const RUNTIME_LAYERS: RuntimeLayer[] = [
  {
    key: 'planning',
    name: 'Planning and reasoning',
    plain:
      'A model proposes a workflow, then revises the parts that have not run yet as new information arrives.',
    detail:
      'Planning is treated as a replaceable participant. It can be a model, several models, or a human, and it never holds execution, authority, or the record.',
    projects: [{ label: 'Guihua', href: '/projects/guihua/' }],
  },
  {
    key: 'definition',
    name: 'Workflow definition',
    plain:
      'The proposed workflow is written down, typed, checked, and frozen into an inspectable plan.',
    detail:
      'The plan pins the exact tools, prompts, and model profiles it depends on, so a reviewer can see what is intended before anything runs.',
    projects: [{ label: 'Fuwen', href: '/projects/fuwen/' }],
  },
  {
    key: 'execution',
    name: 'Durable execution',
    plain:
      'The plan runs durably. It can retry, restart, and resume after a crash, and it is deterministic between reasoning checkpoints.',
    detail:
      'The workflow, not the model, is the unit of scheduling and recovery. Each step records what it did so execution can continue from a known point.',
    projects: [{ label: 'Zhinu', href: '/projects/zhinu/' }],
  },
  {
    key: 'model',
    name: 'Model access',
    plain:
      'Inference steps call models through a provider-neutral boundary, so a vendor can be replaced without rewriting the workflow.',
    detail:
      'Model access runs inside execution rather than as a separate stage: an inference step is one kind of activity alongside deterministic ones.',
    projects: [{ label: 'Baize', href: '/projects/baize/' }],
    adjunct: true,
  },
  {
    key: 'authority',
    name: 'Authority and policy',
    plain:
      'Before work may act, its exact identity is checked against policy and explicit, finite grants.',
    detail:
      'Authority is enforced separately from planning. A plan or a fingerprint proves identity and lineage; it never grants capabilities on its own.',
    projects: [{ label: 'Hufu', href: '/projects/hufu/' }],
  },
  {
    key: 'sandbox',
    name: 'Sandbox and resource access',
    plain:
      'Operations that touch real resources run inside an isolated, least-authority sandbox.',
    detail:
      'The sandbox owns process boundaries, resource limits, and termination, and it is deliberately usable on its own.',
    projects: [{ label: 'Gagamba', href: '/projects/gagamba/' }],
  },
  {
    key: 'evidence',
    name: 'Evidence and provenance',
    plain:
      'Durable, tamper-evident records show what actually ran, what changed, and how the work recovered.',
    detail:
      'Evidence is written so someone else can check it later, including failures and recovery, rather than trusting a summary.',
    projects: [
      { label: 'Siming', href: '/projects/siming/' },
      { label: 'Hongxian', href: '/projects/hongxian/' },
    ],
  },
];

export interface SupportingPrimitive extends ProjectRef {
  note: string;
}

/**
 * Libraries that support the runtime but are not stages in it: neutral
 * contracts and reusable building blocks.
 */
export const SUPPORTING_PRIMITIVES: SupportingPrimitive[] = [
  {
    label: 'Core Contracts',
    href: '/projects/penghou/',
    note: 'The neutral workflow, I/O and model transport contracts shared by the runtime.',
  },
  {
    label: 'Qingniao',
    href: '/projects/qingniao/',
    note: 'Lifecycle for one delegated unit of work, from acceptance to terminal evidence.',
  },
  {
    label: 'Cangjie',
    href: '/projects/cangjie/',
    note: 'Local-first, provenance-aware context store with reproducible snapshots.',
  },
  {
    label: 'Hetu',
    href: '/projects/hetu/',
    note: 'Embedded code knowledge graph for repository understanding and impact analysis.',
  },
  {
    label: 'Nuwa',
    href: '/projects/nuwa/',
    note: 'Schema-aware repair of malformed model output into valid structured data.',
  },
];
