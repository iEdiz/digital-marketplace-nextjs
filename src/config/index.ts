export const PRODUCT_CATEGORIES = [
  {
    label: "Valentines Day",
    value: "valentines_day" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "/products?category=valentines_day",
        imageSrc: "/nav/valentines_day/booked.png",
      },
      {
        name: "New Arrivals",
        href: "/products?category=valentines_day&sort=desc",
        imageSrc: "/nav/valentines_day/reading.png",
      },
      {
        name: "Bestsellers",
        href: "/products?category=valentines_day",
        imageSrc: "/nav/valentines_day/valentines.png",
      },
    ],
  },
  {
    label: "Fantasy",
    value: "fantasy" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: "/products?category=fantasy",
        imageSrc: "/nav/fantasy/picks.png",
      },
      {
        name: "New Arrivals",
        href: "/products?category=fantasy&sort=desc",
        imageSrc: "/nav/fantasy/new.png",
      },
      {
        name: "Bestselling Fantasy Merch",
        href: "/products?category=fantasy",
        imageSrc: "/nav/fantasy/bestsellers.png",
      },
    ],
  },
];
