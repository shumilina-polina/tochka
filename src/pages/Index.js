import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Author from "components/Author/Author";
import Numbers from "components/Numbers/Numbers";
import Formats from "components/Formats/Formats";
import Cases from "components/Cases/Cases";
import Steps from "components/Steps/Steps";
import About from "components/About/About";
import MainScreen from "components/MainScreen/MainScreen";
import { useFetch } from "api/useFetch";
import QueryString from "qs";
import { ADMIN_URL } from "api/api";
import { useLocation } from "react-router-dom";

const query = QueryString.stringify(
  {
    populate: {
      textWithAuthor: {
        populate: {
          author: { populate: { photo: { populate: "*" } } },
        },
      },
      case: {
        populate: {
          video: { populate: { video: { populate: "*" } } },
          photos: { populate: "*" },
          number: { populate: "*" },
          circle: { populate: "*" },
        },
      },
      numberBlocks: {
        populate: "*",
      },
      titleWithDescription: {
        populate: "*",
      },
      headerTitle: {
        populate: "*",
      },
      formats: {
        populate: "*",
      },
      steps: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

const Index = () => {
  const { data, isLoading, isError } = useFetch(`homepage?` + query);

  const location = useLocation();

  useEffect(() => {
    if (location.hash && !isLoading && !isError) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location, isLoading]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="main-wr">
      <MainScreen data={data?.data} isLoading={isLoading} />
      <Wrapper>
        <Numbers data={data?.data?.numberBlocks} isLoading={isLoading} />
        <About data={data?.data?.titleWithDescription} isLoading={isLoading} />
        {data?.data && <Cases data={data.data} />}
        {data?.data.textWithAuthor[1] && (
          <h2 className={s.tech}>
            {data?.data.textWithAuthor[1].text
              .split("\n")
              .map((line, index, array) => (
                <span key={index} data-aos="fade-left">
                  {line}
                  {index < array.length - 1 && " "}
                </span>
              ))}
          </h2>
        )}
        {data?.data?.textWithAuthor[1]?.author && (
          <div className={s.author_wrapper_masha}>
            <Author>
              <div>
                <img
                  src={
                    ADMIN_URL + data.data.textWithAuthor[1].author.photo?.url
                  }
                  alt={data.data.textWithAuthor[1].author.name}
                />
              </div>
              <div>
                <h3>{data.data.textWithAuthor[1].author.name}</h3>
                <p style={{ whiteSpace: "pre-line" }}>
                  {data.data.textWithAuthor[1].author.text}
                </p>
              </div>
            </Author>
          </div>
        )}
        <Steps data={data?.data?.steps} />
        <Formats data={data?.data?.formats} />
      </Wrapper>
    </div>
  );
};

export default Index;
