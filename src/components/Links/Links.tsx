import LinkData from '../../data/links';

interface LinksProps {
  parentClass?: string;
  linkClass?: string;
  key: string;
}

const Links = (props:LinksProps) => {
  return (
    <div className={props.parentClass}>
      {
        LinkData.map((link, index) => (
          <a href={link.href} key={`${props.key}-link-${index}`} className={props.linkClass}>
            {link.name}
          </a>
        ))
      }
    </div>
  )
}

export default Links