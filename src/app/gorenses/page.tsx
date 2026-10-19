import type { Metadata } from "next";
import Link from "next/link";
import { gorensesPrivacy as policy } from "@/content/gorenses-privacy";
import styles from "./privacy.module.css";

const description =
  "Gören Ses gizlilik politikası: fotoğraflar, Groq ile yapay zekâ analizi, sesli sorular, yerel kayıtlar, paylaşım onayı ve silme seçenekleri.";

export const metadata: Metadata = {
  title: "Gören Ses — Gizlilik Politikası ve Destek",
  description,
  alternates: { canonical: policy.url },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gören Ses — Gizlilik Politikası",
    description,
    url: policy.url,
    siteName: "Emir Özdiş",
    locale: "tr_TR",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Gören Ses — Gizlilik Politikası",
    description,
    images: [],
  },
};

function PolicyContents() {
  return (
    <nav aria-label="Gizlilik politikası bölümleri">
      <ol className={styles.contentsList}>
        {policy.sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          </li>
        ))}
        <li><a href="#destek"><span aria-hidden="true">↗</span>Destek ve iletişim</a></li>
      </ol>
    </nav>
  );
}

export default function GorensesPrivacyPage() {
  return (
    <div lang="tr" className={styles.page}>
      <a className={styles.skipLink} href="#politika">Gizlilik politikasına geç</a>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/">Emir Özdiş<span aria-hidden="true"> / </span><span>Uygulamalar</span></Link>
        <a className={styles.headerLink} href="#destek">Gören Ses destek <span aria-hidden="true">↗</span></a>
      </header>

      <div className={styles.hero}>
        <p className={styles.eyebrow}><span aria-hidden="true" />GÖREN SES</p>
        <h1>Gizlilik politikası<span>.</span></h1>
        <p className={styles.intro}>Fotoğraflarınızın nereye gittiğini, nelerin cihazınızda kaldığını ve kontrolün sizde olduğu noktaları açıkça anlatıyoruz.</p>
        <div className={styles.meta}>
          <span>Gören Ses mobil uygulaması</span>
          <span>Son güncelleme: <time dateTime={policy.updatedISO}>{policy.updated}</time></span>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.contentsTitle}>BU SAYFADA</p>
          <PolicyContents />
        </aside>

        <article id="politika" className={styles.article} tabIndex={-1} aria-label="Gören Ses gizlilik politikası">
          <div className={styles.summary}>
            <p className={styles.summaryLabel}>Önce bilmeniz gereken</p>
            <p>Fotoğraf analizi cihazda tamamlanmaz. Açık onayınızla fotoğraflar ve ilgili kişisel bağlam, yanıt üretmesi için <strong>Groq’a gönderilir.</strong> Onayı geri çekmek yeni paylaşımı durdurur; daha önce gönderilmiş verileri geri almaz.</p>
          </div>

          <details className={styles.mobileContents}>
            <summary>Politika bölümleri</summary>
            <PolicyContents />
          </details>

          {policy.sections.map((section, index) => (
            <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-baslik`}>
              <p className={styles.sectionNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
              <h2 id={`${section.id}-baslik`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 4 && <a className={styles.sourceLink} href="https://console.groq.com/docs/your-data">Groq’un veri işleme açıklamasını okuyun <span aria-hidden="true">↗</span></a>}
            </section>
          ))}

          <section id="destek" className={styles.support} aria-labelledby="destek-baslik">
            <p className={styles.eyebrow}>DESTEK VE İLETİŞİM</p>
            <h2 id="destek-baslik">Bir sorunuz mu var?</h2>
            <p>Uygulama desteği, gizlilik soruları veya verilerinizle ilgili talepler için bize yazın. E-postanıza API anahtarınızı ya da gereksiz hassas bilgileri eklemeyin.</p>
            <a className={styles.email} href={`mailto:${policy.contact}`}>{policy.contact}<span aria-hidden="true">↗</span></a>
            <p className={styles.supportNote}>Gören Ses · Emir Özdiş</p>
          </section>
        </article>
      </div>

      <footer className={styles.footer}>
        <Link href="/">Emir Özdiş</Link>
        <span>Gören Ses · Gizlilik ve destek</span>
        <a href="#politika">Başa dön ↑</a>
      </footer>
    </div>
  );
}
