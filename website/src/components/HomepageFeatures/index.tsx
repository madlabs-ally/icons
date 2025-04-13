import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Framework-Ready',
    Svg: require('@site/static/img/framework_ready.svg').default,
    description: (
      <>
        Use MeloSpot Icons in React, Vue, Angular, Svelte, Solid, and Preact. Each icon is a drop-in component tailored for your stack.
      </>
    ),
  },
  {
    title: 'Pixel-Perfect SVGs',
    Svg: require('@site/static/img/pixel_perfect.svg').default,
    description: (
      <>
        Every icon is designed with clarity and consistency in mind — optimized SVGs, accessible and production-ready.
      </>
    ),
  },
  {
    title: 'Customizable & Open',
    Svg: require('@site/static/img/customizable_open.svg').default,
    description: (
      <>
        Change color, size, stroke, and style easily. Open-source and built to scale with your design system.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
