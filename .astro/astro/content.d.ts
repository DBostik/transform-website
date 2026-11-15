declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"10-diet-myths-that-are-keeping-you-from-losing-weight.md": {
	id: "10-diet-myths-that-are-keeping-you-from-losing-weight.md";
  slug: "10-diet-myths-that-are-keeping-you-from-losing-weight";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"30-minute-vs-60-minute-personal-training.md": {
	id: "30-minute-vs-60-minute-personal-training.md";
  slug: "30-minute-vs-60-minute-personal-training";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"5-tips-to-beat-first-training-session-nerves.md": {
	id: "5-tips-to-beat-first-training-session-nerves.md";
  slug: "5-tips-to-beat-first-training-session-nerves";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"a-delicious-vegetarian-friendly-bowl.md": {
	id: "a-delicious-vegetarian-friendly-bowl.md";
  slug: "a-delicious-vegetarian-friendly-bowl";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"a-hearty-and-healthy-breakfast-burrito.md": {
	id: "a-hearty-and-healthy-breakfast-burrito.md";
  slug: "a-hearty-and-healthy-breakfast-burrito";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"a-perfectly-refreshing-lunch-salad.md": {
	id: "a-perfectly-refreshing-lunch-salad.md";
  slug: "a-perfectly-refreshing-lunch-salad";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"best-low-impact-workouts-for-weight-loss.md": {
	id: "best-low-impact-workouts-for-weight-loss.md";
  slug: "best-low-impact-workouts-for-weight-loss";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"curb-those-junk-food-cravings.md": {
	id: "curb-those-junk-food-cravings.md";
  slug: "curb-those-junk-food-cravings";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"do-online-weight-loss-coaches-work.md": {
	id: "do-online-weight-loss-coaches-work.md";
  slug: "do-online-weight-loss-coaches-work";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"five-different-frittatas.md": {
	id: "five-different-frittatas.md";
  slug: "five-different-frittatas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fueling-your-ferrari.md": {
	id: "fueling-your-ferrari.md";
  slug: "fueling-your-ferrari";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"girls-lifting-weights-9-reasons-why-women-should-lift.md": {
	id: "girls-lifting-weights-9-reasons-why-women-should-lift.md";
  slug: "girls-lifting-weights-9-reasons-why-women-should-lift";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"greek-chickpeas-on-toast.md": {
	id: "greek-chickpeas-on-toast.md";
  slug: "greek-chickpeas-on-toast";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"healthy-homemade-granola.md": {
	id: "healthy-homemade-granola.md";
  slug: "healthy-homemade-granola";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-long-does-it-take-to-see-results-with-a-personal-trainer.md": {
	id: "how-long-does-it-take-to-see-results-with-a-personal-trainer.md";
  slug: "how-long-does-it-take-to-see-results-with-a-personal-trainer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-much-does-a-personal-trainer-cost-in-chicago.md": {
	id: "how-much-does-a-personal-trainer-cost-in-chicago.md";
  slug: "how-much-does-a-personal-trainer-cost-in-chicago";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-much-does-online-personal-training-cost.md": {
	id: "how-much-does-online-personal-training-cost.md";
  slug: "how-much-does-online-personal-training-cost";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-choose-a-personal-trainer-for-weight-loss-in-chicago.md": {
	id: "how-to-choose-a-personal-trainer-for-weight-loss-in-chicago.md";
  slug: "how-to-choose-a-personal-trainer-for-weight-loss-in-chicago";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"is-personal-training-worth-it-in-chicago.md": {
	id: "is-personal-training-worth-it-in-chicago.md";
  slug: "is-personal-training-worth-it-in-chicago";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"personal-training-for-busy-professionals.md": {
	id: "personal-training-for-busy-professionals.md";
  slug: "personal-training-for-busy-professionals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"protein-basics.md": {
	id: "protein-basics.md";
  slug: "protein-basics";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"simple-changes-you-can-make-to-lose-weight.md": {
	id: "simple-changes-you-can-make-to-lose-weight.md";
  slug: "simple-changes-you-can-make-to-lose-weight";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sweet-potato-apple-latkes.md": {
	id: "sweet-potato-apple-latkes.md";
  slug: "sweet-potato-apple-latkes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-invisible-reality-internal-health.md": {
	id: "the-invisible-reality-internal-health.md";
  slug: "the-invisible-reality-internal-health";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-top-7-healthy-restaurants-in-chicago.md": {
	id: "the-top-7-healthy-restaurants-in-chicago.md";
  slug: "the-top-7-healthy-restaurants-in-chicago";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"veggie-love.md": {
	id: "veggie-love.md";
  slug: "veggie-love";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"weight-loss-plateau-3-unseen-factors.md": {
	id: "weight-loss-plateau-3-unseen-factors.md";
  slug: "weight-loss-plateau-3-unseen-factors";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-are-macros.md": {
	id: "what-are-macros.md";
  slug: "what-are-macros";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-happens-in-your-free-first-personal-training-session.md": {
	id: "what-happens-in-your-free-first-personal-training-session.md";
  slug: "what-happens-in-your-free-first-personal-training-session";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-the-best-protein-powder-for-women.md": {
	id: "what-is-the-best-protein-powder-for-women.md";
  slug: "what-is-the-best-protein-powder-for-women";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-am-i-gaining-weight-the-guide-to-putting-on-muscle-and-how-it-helps-burn-fat.md": {
	id: "why-am-i-gaining-weight-the-guide-to-putting-on-muscle-and-how-it-helps-burn-fat.md";
  slug: "why-am-i-gaining-weight-the-guide-to-putting-on-muscle-and-how-it-helps-burn-fat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
