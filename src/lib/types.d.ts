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
