import { useNavigate, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { useEffect } from "react";
import useMarvelService from "../../services/marvelService";
import styled from "styled-components";
import Error from "../Error";
import Spinner from "../Spinner";
import Ads from "../Ads";

function Comic() {
  const { comicId } = useParams();
  const [comic, setComic] = useState([]);
  const { error, loading, getComicById } = useMarvelService();
  const navigate = useNavigate();

  useEffect(() => {
    getComicById(comicId).then((res) => setComic(res[0]));
  }, [comicId]);

  const clearString = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const renderItems = () => {
    return (
      <Wrapper>
        <div className="image">
          <img src={comic.thumbnail} alt={comic.title} />
        </div>
        <div className="info">
          <h2>{comic.title}</h2>
          <p className="description">
            {comic.description ? clearString(comic.description) : "NO"}
          </p>
          <p className="pageCount">{comic.pageCount}</p>
          <p className="language">{comic.language}</p>
          <h3>{comic.price}</h3>
        </div>
		  <div className="back"> 
			<div onClick={() => navigate(-1)}>Back to all</div>
		  </div>
      </Wrapper>
    );
  };

  const test = renderItems()

  const _error = useMemo(() => (error ? <AdditionalWrapper><Error /></AdditionalWrapper>  : null), [error]);
  const _loading = useMemo(() => (loading ? <AdditionalWrapper><Spinner /></AdditionalWrapper> : null), [loading]);
  const _contents = ( error || loading || comic === [] ? null : test);
  return (
    <>
		<Ads/>
      {_error}
      {_contents}
      {_loading}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  img {
    width: 293px;
    max-height: 450px;
    margin-right: 50px;
	  flex-grow: 0;
  }
  .info {
    font-family: "Roboto Condensed";
    color: #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
	 flex-grow: 1;
	 max-width: 650px;
    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 25px;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #9f0013;
    }
    .description {
      margin-bottom: 25px;
    }
    .language {
      margin-bottom: 25px;
    }
    .pageCount {
      margin-bottom: 25px;
    }
  }
	.back {
		width: 150px;
		text-align: end;
		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
		font-family: 'Roboto Condensed';
		cursor: pointer;
	}
`;

const AdditionalWrapper = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
`;

export default Comic;
