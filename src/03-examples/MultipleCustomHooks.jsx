

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
      `https://rickandmortyapi.com/api/character/${counter}`
    );
    // console.log(data);
    const { name, status, species, gender, image } = !!data && data;
    const quote = `status: ${status} species: ${species} gender:${gender}`;
    
    
    return (
      <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {isLoading ? (
          <LoadingQuote />
        ) : (
          <Quote author={name} quote={quote} urlImage={image} />
        )}

        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => decrement()}
        >
          Prev quote
        </button>
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => increment()}
        >
          Next quote
        </button>
      </>
    );
}
