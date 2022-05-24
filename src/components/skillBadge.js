export default function SkillBadge(props) {
  
    return (
      <>
        <span className="text-s inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-gray-700 rounded bg-gray-800 text-white dark:bg-white dark:text-gray-800">{props.skills}</span>
      </>
    );
  }