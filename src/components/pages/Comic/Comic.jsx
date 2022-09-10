import { useNavigate, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { useEffect } from "react";
import useMarvelService from "../../../services/marvelService";
import styled from "styled-components";
import Error from "../../Error/Error";
import Spinner from "../../Spinner/Spinner";
import Ads from "../../Ads/Ads";
import "./Comic.css"

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
      <>
        <div className="comic-wrapper">
          <div className="image">
            <img src={comic.thumbnail} alt={comic.title} />
          </div>
          <div className="info">
            <h2>{comic.title}</h2>
            <p className="description">
              {comic.description ? clearString(comic.description) : <span>Unfortunately, no additional information provided<span role="img" aria-label="sheep">😑</span></span>}
            </p>
            <p className="pageCount">{comic.pageCount}</p>
            <p className="language">{comic.language}</p>
            <h3>{comic.price}</h3>
          </div>
        </div>
        <div className="back"> 
          <div onClick={() => navigate(-1)}>Back to all</div>
        </div>
      </>
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

const AdditionalWrapper = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
`;

export default Comic;
