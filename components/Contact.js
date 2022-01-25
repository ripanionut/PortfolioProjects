import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
          href="https://www.facebook.com/ionutionutzrapan"
          target="_blank"
          rel="noreferrer"
        >
                     

          <Image
            src="/static/icons/fb2.svg"
            width={40}
            height={40}
            alt="LinkedIn icon"
          />
        </a>
        )}
        {contact.dribbble && (
          <a
            href={`https://dribbble.com/${contact.dribbble}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/dribbble.svg"
              width={40}
              height={40}
              alt="Dribbble icon"
            />
          </a>
        )}
        
        {contact.linkedin && (
          <a
            href="https://www.linkedin.com/in/ripan-ionut-3ba8b1204/"
            target="_blank"
            rel="noreferrer"
          >
                       

            <Image
              src="/static/icons/linkedin.svg"
              width={35}
              height={35}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
