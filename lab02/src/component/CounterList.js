import Counter from "./Counter";

export default function CounterList() {
    const counters =
        [
            { id: 1, init: 6, min: -5, max: 6 },
            { id: 2, init: 6 },
            { id: 3 },
        ]
    return (
        <>
            {counters.map((counter) =>
                <>
                <hr></hr>
                    <Counter id={counter.id} data={counter} />
                    <hr></hr>
                </>
            )}
        </>
    );

}