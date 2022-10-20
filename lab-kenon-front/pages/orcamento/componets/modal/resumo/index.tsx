import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { setTimeout } from "timers";
import glasses from "../../../../../public/lottie/sunglass-loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: glasses,
};

const Resumo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <Lottie options={defaultOptions} width={450} height={450} />;
};

export default Resumo;
