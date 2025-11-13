import { useParams } from "react-router-dom";
import { useStrapi } from "../hooks/useStrapi";

function DynamicPage() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useStrapi(`authors`);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError || !data?.data?.length) return <div>Ошибка загрузки</div>;

  const page = data.data[0].attributes;

  return (
    <div>
      <h1>{page.title}</h1>
      <div></div>
    </div>
  );
}

export default DynamicPage;
