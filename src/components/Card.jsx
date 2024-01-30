import React,{useRef} from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion"

const Card = ({data, bound}) => {

	return (
		<motion.div drag  dragConstraints={bound} className="cardClass relative w-60 h-72 rounded-[45px] bg-zinc-800/50 border border-black shadow-md px-5 py-10 text-white p-5 tracking-wide overflow-hidden flex-shrink-0">
				<FaRegFileAlt />
				<p className="mt-5 text-sm font-lighter">{data.detail}</p>
				<div className="footer absolute w-full bottom-0 left-0">
						<div className="flex justify-between items-center px-7 mb-4" >
								<div  >{ data.size }</div>
								<span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
										{ data.isClose ? <GrFormClose className="shadow-sm" size="0.8em" color="#000" /> : <MdOutlineFileDownload className="shadow-sm" size="0.8em" color="#000" /> }
								</span>
						</div>
						{ data.label.isLabel && (
							<div className="tag w-full h-10 bg-green-500 py-2 flex items-center justify-center" >
								<h3 className="text-white text-sm ">Download now</h3>
							</div>
						)} 
				</div>
		</motion.div>
	)
}

export default Card