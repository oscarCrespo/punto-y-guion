import styles from "./header.module.css";
import Link from "next/link";
interface Props {
  text: string;
  icon?: string;
  href?: string;
}
export default function HeaderLink({ text, icon, href }: Props) {
  const target = href?.includes("//") ? { target: "_blank" } : {};

  return (
    <Link href={href}>
      <a {...target}>
        <div className={styles.headerLink}>
          <span>{text}</span>
          {icon && (
            <img className={styles.linkIcon} src={icon} alt={`${text} image`} />
          )}
        </div>
      </a>
    </Link>
  );
}
