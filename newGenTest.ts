interface Course {
    name: string;
    prices: PriceRange;
}

type PriceRange = [number | null, number | null];

const filterCourses = (listOfCourses: Course[], priceRange: PriceRange) => {
    const priceFrom = priceRange[0] === null ? 0 : priceRange[0];
    const priceTo = priceRange[1] === null ? Infinity : priceRange[1];

    return listOfCourses.filter(({ prices }) => {
        prices[0] = prices[0] === null ? 0 : prices[0];
        prices[1] = prices[1] === null ? Infinity : prices[1];
        return priceFrom <= prices[0] && priceTo >= prices[1];
    });
};

type TypeOfSorts = "ASC" | "DESC";

const sortCourses = (listOfCourses: Course[], typeOfSort: TypeOfSorts) => {
    switch (typeOfSort) {
        case "ASC":
            return listOfCourses.sort((a, b) => {
                const prev = a.prices[1] === null ? Infinity : a.prices[1];
                const next = b.prices[1] === null ? Infinity : b.prices[1];
                return prev - next;
            });
        case "DESC":
            return listOfCourses.sort((a, b) => {
                const prev = a.prices[1] === null ? Infinity : a.prices[1];
                const next = b.prices[1] === null ? Infinity : b.prices[1];
                return next - prev;
            });
        default:
            return listOfCourses;
    }
};





