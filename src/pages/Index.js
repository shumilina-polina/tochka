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

const query = QueryString.stringify(
  {
    populate: {
      about: {
        populate: "*",
      },
      textWithAuthor: {
        populate: {
          author: { populate: { photo: { populate: "*" } } },
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
  const { data, isLoading } = useFetch(`homepage?` + query);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="main-wr">
      <MainScreen data={data?.data} isLoading={isLoading} />
      <Wrapper>
        <Numbers data={data?.data?.numberBlocks} isLoading={isLoading} />
        <About data={data?.data?.titleWithDescription} isLoading={isLoading} />
        <Cases data={data?.data} isLoading={isLoading} />
        {data?.data?.textWithAuthor[1] && (
          <h2 className={s.tech}>
            {data.data.textWithAuthor[1].text
              .split("\n")
              .map((line, index, array) => (
                <span key={index} data-aos="fade-left">
                  {line.replace(/ /g, "\u00A0")}
                  {index < array.length - 1 && "\u00A0"}
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
                <p>{data.data.textWithAuthor[1].author.text}</p>
              </div>
            </Author>
          </div>
        )}

        <Steps />
        <Formats />
      </Wrapper>
    </div>
  );
};

export default Index;
