import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
      `https://rickandmortyapi.com/api/character/${counter}`
    );
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
          onClick={() => increment()}
        >
          Next quote
        </button>
      </>
    );
}
