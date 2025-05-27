type BackendAboutContact = {
	email: string;
};

type BackendAboutUrl = {
	name: string;
	preferred: boolean;
	url: string;
};

type BackendAboutWallet = {
	address: string;
	currency_code: string;
	network: string;
	preferred: boolean;
};

type BackendAboutDonations = {
	links: BackendAboutUrl[];
	wallets: BackendAboutWallet[];
};

export type BackendAbout = {
	about: string;
	contact: BackendAboutContact;
	donations: BackendAboutDonations;
	socials: BackendAboutUrl[];
	status: string;
};

export enum SpecialTargetValues {
	SELF = '_self',
	BLANK = '_blank',
	PARENT = '_parent',
	TOP = '_top'
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};
