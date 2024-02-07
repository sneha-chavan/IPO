export enum Headings {
  NameAndDate = "Company/Issue date",
  MinInvest = "Min invest/qty",
}

export enum Common {
  MinAmount = "Minimum Amount",
  PriceRange = "Price range",
  IssueSize = "Issue size",
  LotSize = "Lot size",
  IssueDate = "Issue date",
  ListedOn = "Listed on",
  ListedPrice = "Listed price",
  ListingGains = "Listing gains",
  Shares = "shares/lots",
  Corer = "Cr",
  IPODetailTitle = "IPO Details",
  AboutCompany = "About the company",
}

export type IpoType = {
  id: number;
  name: string;
  subname: string;
  logo: string;
  issue_date: string;
  issue_size_min: number;
  issue_size_max: number;
  price_range_start: number;
  price_range_end: number;
  min_invest: number;
  shares_per_qty: string;
  listed_on: string;
  about_company: string;
  status: string;
  gains: number;
  gains_percentage: number;
};
