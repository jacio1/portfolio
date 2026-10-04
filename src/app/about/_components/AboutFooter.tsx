import { useTranslations } from "next-intl"

export default function AboutFooter(){
    const t = useTranslations('AboutPage')
    
    return(
        <div>
            <h2>{t('stack')}</h2>
            <ul>
                <li>
                    html
                </li>
            </ul>
        </div>
    )
}