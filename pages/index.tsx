import axios from "axios";
import { Video } from "../type";
interface IProps {
  videos: Video[];
}
const Home = ({ videos }: IProps) => {
  console.log(videos);
};
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      videos: data,
    },
  };
};
export default Home;
