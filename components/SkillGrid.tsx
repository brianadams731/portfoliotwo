import { TechUsed } from "./TechUsed";

import styles from '../styles/SkillGrid.module.scss';

const SkillGrid = () => {
    return (
        <section className={styles.wrapper}>
            <TechUsed imgURL="/logos/ts.svg" name="TypeScript" />
            <TechUsed imgURL="/logos/next.svg" name="NextJS" />
            <TechUsed imgURL='/logos/react.svg' name="React" />
            <TechUsed imgURL='/logos/redux.svg' name="Redux" />


            <TechUsed imgURL="/logos/node.svg" name="Node" />
            <TechUsed imgURL="/logos/express.svg" name="Express" />
            <TechUsed imgURL='/logos/jest.svg' name="Jest" />
            <TechUsed imgURL='/logos/postgres.svg' name="Postgres" />

            <TechUsed imgURL='/logos/html.svg' name="HTML" />
            <TechUsed imgURL='/logos/css.svg' name="CSS" />
            <TechUsed imgURL='/logos/sass.svg' name="SCSS" />

            <TechUsed imgURL="/logos/python.svg" name="Python" />
            <TechUsed imgURL="/logos/flask.svg" name="Flask" />

            <TechUsed imgURL="/logos/java.svg" name="Java" />
            <TechUsed imgURL="/logos/git.svg" name="Git" />
        </section>
    )
}

export { SkillGrid }; 