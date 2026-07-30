import { useState } from "react";
import Button from "../common/Button";

export default function FoodSearchBar({ onSearch }) {

    const [keyword, setKeyword] = useState("");

    return (

        <div className="flex gap-4">

            <input
                className="flex-1 border rounded-lg p-3"
                placeholder="Search food..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        onSearch(keyword);
                }}
            />

            <Button
                onClick={() => onSearch(keyword)}
            >
                Search
            </Button>

        </div>

    );

}