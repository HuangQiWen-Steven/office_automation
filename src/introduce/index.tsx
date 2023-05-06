import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import conglan from '../assets/葱兰.png'
import hewanglan from '../assets/鹤望兰.png'
import juhua from '../assets/菊花.png'
import qianniuhua from '../assets/牵牛花.png'
import fenwei from '../assets/鸢尾.png'
import shuixian from '../assets/水仙.png'
import xiangrikuai from '../assets/向日葵.png'

import { fadeIn, textVariant } from "../../utils/motion";

const services = [
  {
    title: "PDF加密",
    icon: conglan,
  },
  {
    title: "PDF解密",
    icon: hewanglan,
  },
  {
    title: "PDF添加水印",
    icon: juhua,
  },
  {
    title: "合并2个PDF",
    icon: qianniuhua,
  },
  {
    title: "PDF 转 Word",
    icon: fenwei,
  },
  {
    title: "TxT 转成 PDF",
    icon: shuixian,
  },
  {
    title: "转图片",
    icon: xiangrikuai,
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-20 h-20 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>PDF文档处理</p>
        <h2 className={styles.sectionHeadText}>PDF</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        处理常用的PDF格式的内容，例如PDF转Word，加密，解密等一切效果。
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
}

export default About;
