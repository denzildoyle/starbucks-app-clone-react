
import { isAvailable } from "./DescriptionUtils";

describe("isAvailable", () => {
    test("isAvailable function works", () => {
        expect(isAvailable("Arima")).toBe(true);
    });
});