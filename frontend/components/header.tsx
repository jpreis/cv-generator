import { PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/solid";
import { FC } from "react";

export const Header = () => {
  const Name = (
    <h1 className="text-4xl font-extrabold tracking-tight">
      Firstname Lastname
    </h1>
  );

  const Title = (
    <h2 className="mb-6 text-2xl text-cyan-500">Software Engineer, React</h2>
  );

  const Introduction = (
    <div className="max-w-prose">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        vitae doloremque distinctio numquam atque. In quia fugiat laborum quas
        maxime nam eaque facere unde reiciendis explicabo, error, hic saepe
        odit.
      </p>
    </div>
  );

  const Image = (
    <img
      className="flex-shrink-0 w-36 h-36 rounded-full object-cover mx-auto md:ml-auto ring-4 ring-slate-300 ring-offset-4 "
      src="http://placekitten.com/201/200"
      alt="firstname lastname"
    />
  );

  const About = (
    <div className="grid lg:grid-cols-2 gap-2 mb-6">
      <AboutEntry Icon={PhoneIcon} content="+49 151 12345678" />
      <AboutEntry Icon={MailIcon} content="firstname.lastname@gmail.com" />
      <AboutEntry
        Icon={HomeIcon}
        content="Some Very Long Street 123, 12345 Munich"
      />
    </div>
  );

  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row relative mb-20">
      <div>
        {Name}
        {Title}
        {About}
        {Introduction}
      </div>
      {Image}
    </div>
  );
};

const AboutEntry: FC<{
  Icon: FC<React.ComponentProps<"svg">>;
  content: React.ReactNode;
}> = ({ Icon, content }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="p-1 bg-black rounded-sm ">
        <Icon className="w-4  h-4 text-white" />
      </div>
      <div className="leading-tight">{content}</div>
    </div>
  );
};
