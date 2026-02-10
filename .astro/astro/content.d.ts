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
"5-tips-for-getting-fit.md": {
	id: "5-tips-for-getting-fit.md";
  slug: "5-tips-for-getting-fit";
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
"a-healthy-easy-meal-prep-guide-to-help-you-lose-weight.md": {
	id: "a-healthy-easy-meal-prep-guide-to-help-you-lose-weight.md";
  slug: "a-healthy-easy-meal-prep-guide-to-help-you-lose-weight";
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
"a-truth-bomb.md": {
	id: "a-truth-bomb.md";
  slug: "a-truth-bomb";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"another-amazing-success-story.md": {
	id: "another-amazing-success-story.md";
  slug: "another-amazing-success-story";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"benefits-of-having-a-personal-trainer.md": {
	id: "benefits-of-having-a-personal-trainer.md";
  slug: "benefits-of-having-a-personal-trainer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"calories-are-not-enough.md": {
	id: "calories-are-not-enough.md";
  slug: "calories-are-not-enough";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"change-your-identity.md": {
	id: "change-your-identity.md";
  slug: "change-your-identity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cinnamon-coffee-smoothie.md": {
	id: "cinnamon-coffee-smoothie.md";
  slug: "cinnamon-coffee-smoothie";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"creamy-avocado-smoothie.md": {
	id: "creamy-avocado-smoothie.md";
  slug: "creamy-avocado-smoothie";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"create-a-playlist-that-motivates-you.md": {
	id: "create-a-playlist-that-motivates-you.md";
  slug: "create-a-playlist-that-motivates-you";
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
"developing-a-strength-training-program.md": {
	id: "developing-a-strength-training-program.md";
  slug: "developing-a-strength-training-program";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"do-the-work.md": {
	id: "do-the-work.md";
  slug: "do-the-work";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"don-t-have-control.md": {
	id: "don-t-have-control.md";
  slug: "don-t-have-control";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"draw-a-line-in-the-sand.md": {
	id: "draw-a-line-in-the-sand.md";
  slug: "draw-a-line-in-the-sand";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"drinking-and-dieting.md": {
	id: "drinking-and-dieting.md";
  slug: "drinking-and-dieting";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"exercising-to-look-younger.md": {
	id: "exercising-to-look-younger.md";
  slug: "exercising-to-look-younger";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"experience-ultimate-weight-loss-with-these-simple-tips.md": {
	id: "experience-ultimate-weight-loss-with-these-simple-tips.md";
  slug: "experience-ultimate-weight-loss-with-these-simple-tips";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extra-bites-add-up.md": {
	id: "extra-bites-add-up.md";
  slug: "extra-bites-add-up";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fitting-an-exercise-program-into-a-daily-routine.md": {
	id: "fitting-an-exercise-program-into-a-daily-routine.md";
  slug: "fitting-an-exercise-program-into-a-daily-routine";
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
"fix-how-you-fuel-your-body.md": {
	id: "fix-how-you-fuel-your-body.md";
  slug: "fix-how-you-fuel-your-body";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"focus-on-yourself.md": {
	id: "focus-on-yourself.md";
  slug: "focus-on-yourself";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"forgiveness-is-healthy.md": {
	id: "forgiveness-is-healthy.md";
  slug: "forgiveness-is-healthy";
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
"good-shoes.md": {
	id: "good-shoes.md";
  slug: "good-shoes";
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
"healthy-breakfast-smoothies.md": {
	id: "healthy-breakfast-smoothies.md";
  slug: "healthy-breakfast-smoothies";
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
"healthy-shopping-at-the-chicago-sunday-farmers-market.md": {
	id: "healthy-shopping-at-the-chicago-sunday-farmers-market.md";
  slug: "healthy-shopping-at-the-chicago-sunday-farmers-market";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hit-your-health-goals-during-covid-19.md": {
	id: "hit-your-health-goals-during-covid-19.md";
  slug: "hit-your-health-goals-during-covid-19";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-filling-is-the-food-you-re-eating.md": {
	id: "how-filling-is-the-food-you-re-eating.md";
  slug: "how-filling-is-the-food-you-re-eating";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-avoid-food-cravings.md": {
	id: "how-to-avoid-food-cravings.md";
  slug: "how-to-avoid-food-cravings";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-lead-a-more-healthy-and-fit-life.md": {
	id: "how-to-lead-a-more-healthy-and-fit-life.md";
  slug: "how-to-lead-a-more-healthy-and-fit-life";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-make-a-road-bike-purchase.md": {
	id: "how-to-make-a-road-bike-purchase.md";
  slug: "how-to-make-a-road-bike-purchase";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-stay-fit-while-on-vacation.md": {
	id: "how-to-stay-fit-while-on-vacation.md";
  slug: "how-to-stay-fit-while-on-vacation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"italian-breakfast-panzanella.md": {
	id: "italian-breakfast-panzanella.md";
  slug: "italian-breakfast-panzanella";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"its-not-your-fault.md": {
	id: "its-not-your-fault.md";
  slug: "its-not-your-fault";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learn-how-to-get-a-nice-lean-body-for-summer.md": {
	id: "learn-how-to-get-a-nice-lean-body-for-summer.md";
  slug: "learn-how-to-get-a-nice-lean-body-for-summer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"let-me-introduce-you-to-bob.md": {
	id: "let-me-introduce-you-to-bob.md";
  slug: "let-me-introduce-you-to-bob";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"macros.md": {
	id: "macros.md";
  slug: "macros";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"maximizing-nutrient-absorption.md": {
	id: "maximizing-nutrient-absorption.md";
  slug: "maximizing-nutrient-absorption";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"monday-mindset.md": {
	id: "monday-mindset.md";
  slug: "monday-mindset";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"no-better-time-than-now.md": {
	id: "no-better-time-than-now.md";
  slug: "no-better-time-than-now";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nutrient-timing-when-to-eat.md": {
	id: "nutrient-timing-when-to-eat.md";
  slug: "nutrient-timing-when-to-eat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"outdoor-chicago-adventures.md": {
	id: "outdoor-chicago-adventures.md";
  slug: "outdoor-chicago-adventures";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"overnight-oat-parfaits.md": {
	id: "overnight-oat-parfaits.md";
  slug: "overnight-oat-parfaits";
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
"put-yourself-first.md": {
	id: "put-yourself-first.md";
  slug: "put-yourself-first";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"qualities-of-a-good-fitness-trainer.md": {
	id: "qualities-of-a-good-fitness-trainer.md";
  slug: "qualities-of-a-good-fitness-trainer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"setting-fitness-goals-with-your-personal-trainer.md": {
	id: "setting-fitness-goals-with-your-personal-trainer.md";
  slug: "setting-fitness-goals-with-your-personal-trainer";
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
"simple-vegan-breakfast-hash.md": {
	id: "simple-vegan-breakfast-hash.md";
  slug: "simple-vegan-breakfast-hash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"simply-delicious-pancakes.md": {
	id: "simply-delicious-pancakes.md";
  slug: "simply-delicious-pancakes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"slow-cooker-firecracker-chicken-meatballs.md": {
	id: "slow-cooker-firecracker-chicken-meatballs.md";
  slug: "slow-cooker-firecracker-chicken-meatballs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"strawberry-banana-smoothie.md": {
	id: "strawberry-banana-smoothie.md";
  slug: "strawberry-banana-smoothie";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"stretching-is-essential.md": {
	id: "stretching-is-essential.md";
  slug: "stretching-is-essential";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"stronger-than-your-excuses.md": {
	id: "stronger-than-your-excuses.md";
  slug: "stronger-than-your-excuses";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"super-duper-workout-juice.md": {
	id: "super-duper-workout-juice.md";
  slug: "super-duper-workout-juice";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"swap-challenge.md": {
	id: "swap-challenge.md";
  slug: "swap-challenge";
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
"techniques-for-building-muscle-with-your-personal-trainer.md": {
	id: "techniques-for-building-muscle-with-your-personal-trainer.md";
  slug: "techniques-for-building-muscle-with-your-personal-trainer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-best-shakshuka.md": {
	id: "the-best-shakshuka.md";
  slug: "the-best-shakshuka";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-health-roller-coaster.md": {
	id: "the-health-roller-coaster.md";
  slug: "the-health-roller-coaster";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-importance-of-me-time.md": {
	id: "the-importance-of-me-time.md";
  slug: "the-importance-of-me-time";
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
"ways-to-develop-a-successful-fitness-regimen.md": {
	id: "ways-to-develop-a-successful-fitness-regimen.md";
  slug: "ways-to-develop-a-successful-fitness-regimen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"weight-loss-friendly-foods.md": {
	id: "weight-loss-friendly-foods.md";
  slug: "weight-loss-friendly-foods";
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
"why-wait-until-nye.md": {
	id: "why-wait-until-nye.md";
  slug: "why-wait-until-nye";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-we-defeat-ourselves.md": {
	id: "why-we-defeat-ourselves.md";
  slug: "why-we-defeat-ourselves";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"workplace-workouts.md": {
	id: "workplace-workouts.md";
  slug: "workplace-workouts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"you-a-partner-great-motivation.md": {
	id: "you-a-partner-great-motivation.md";
  slug: "you-a-partner-great-motivation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"your-personal-training-studio-and-developing-a-training-plan.md": {
	id: "your-personal-training-studio-and-developing-a-training-plan.md";
  slug: "your-personal-training-studio-and-developing-a-training-plan";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"zinc-s-importance.md": {
	id: "zinc-s-importance.md";
  slug: "zinc-s-importance";
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
