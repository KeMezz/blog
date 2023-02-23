import React from "react";
import { navigate } from "gatsby";

interface BlogSelectorProps {
  value: string;
}

const BlogSelector = ({ value }: BlogSelectorProps) => {
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    navigate(`/blog/${value}`);
  };
  return (
    <select
      onChange={onChange}
      className="border-none bg-transparent font-semibold text-lg lg:text-xl focus:ring-transparent mb-2"
      value={value}
    >
      <option value="recent">최근에 올라온 포스트</option>
      <option value="tag">태그별로 보기</option>
      <option value="series">시리즈 모아보기</option>
    </select>
  );
};

export default BlogSelector;
