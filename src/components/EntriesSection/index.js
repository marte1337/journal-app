import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";




export default function EntriesSection({entries}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index !==0 && <Divider />}
            {/* alternative Lösung für Divider: */}
            {/* {index > 0 ? <Divider /> : null} */}

            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />

            {/* Weitere alternative Lösung für Divider: (hier wird per map zusätzlich noch "arr" abgefragt => {entries.map((entry, index, arr) )*/}
            {/* {(index !== arr.length - 1) && <Divider />} */}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
