export type SupportedLanguages = "TH" | "EN" | "JP";

export type Localization = Record<SupportedLanguages, string>;

export type ProphecyType = "daily" | "love" | "work" | "health";

export type ProphecyDetails = {
	value: number;
	prophecy: Localization;
};

export type ProphecyMap = Record<ProphecyType, ProphecyDetails>;

export type ArcanaData =
	| ({
			arcanaName: string;
			id: number;
			imagePath: string;
			name: Localization;
	  } & ProphecyMap)
	| undefined;

export type ArcanaDataList = Array<ArcanaData>;
