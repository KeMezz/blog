import React from "react";
import { FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";

const PostPreview = () => {
  return (
    <article className="bg-white dark:bg-zinc-900 p-4 rounded-lg flex flex-col gap-3">
      <h2 className="font-semibold">🥕 타입스크립트와 함수</h2>
      <p className="text-xs leading-5">
        각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
        국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을
        위하여 필요한 계획을 수립한다. 헌법개정안은 국회가 의결한 후 30일 이내에
        국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의...
      </p>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <FaRegCalendar />
        <p className="text-xs">2022년 12월 14일</p>
      </div>
    </article>
  );
};

export default PostPreview;
