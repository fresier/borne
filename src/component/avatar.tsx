import clsx from 'clsx';
import Image from 'next/image';

interface props {
    ulbid?: string,
    src?: string,
    alt?: string,
    size?: '--2'|'--3'|'--4',
    border?: number,
    bordercolor?: string,
    className?: string,
}

export const Avatar = ({size, ulbid, src, alt = 'avatar', border = 0, bordercolor = 'primary', className }: props) => {
    src = (src) ? src : `https://monpsy.ulb.be/img/ano.png.webp`
    src = (ulbid) ? `https://monpsy.ulb.be/ajax/avatar.php?ulbid=${ulbid}` : src
    let classSize = (size) ? 'navatar'+size : 'navatar'
    
    return (
        <>
        <div className={clsx(classSize, className)} style={{'position' : 'relative'}}>
            <Image 
                src={src} 
                alt={alt} 
                fill
                className={clsx('navatar','object-fit-cover','rounded-full','border-'+border, 'border-'+bordercolor )}
                sizes=" (max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                
            />
          


        </div>
        </>
        
    )
}