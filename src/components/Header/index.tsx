import classNames from "classnames";
import { useState } from "react";

import { ILevel, ISelectedJoint } from "../../types";

import styles from "./styles.module.css";
import { blocks } from "../../blocks";
import { partMenu } from "../../constants/blocks";

interface IHeaderProps {
  jointSelection?: ISelectedJoint;
  level: ILevel;
  onRemove: () => void;
  onSelect: (part: string) => void;
  onStart: () => void;
  onSwitch: () => void;
  parts: Record<string, number>;
  selectedPart?: string;
}

export default function Header(props: IHeaderProps) {
  const {
    jointSelection,
    level,
    onRemove,
    onSelect,
    onStart,
    onSwitch,
    parts,
    selectedPart,
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState<string>();
  const canStart = level.find((block) => block.id === "end");

  function handleMenu() {
    setMenuOpen((x) => !x);
  }

  function handleSubMenu(label: string) {
    if (subMenu === label) {
      setSubMenu(undefined);
    } else {
      setSubMenu(label);
    }
  }

  return (
    <header className={styles.header}>
      <button onClick={handleMenu} type="button">
        Menu
      </button>
      {menuOpen && (
        <div className={styles.menu}>
          <div className={styles.subMenu}>
            {Object.keys(partMenu).map((label) => (
              <button key={label} type="button" onClick={() => handleSubMenu(label)}>
                {label}
              </button>
            ))}
          </div>
          {subMenu && (
            <div>
              {partMenu[subMenu]
                .filter((part) => parts[part] > 0)
                .map((part, i) => (
                  <button
                    key={i}
                    className={classNames(styles.button, {
                      [styles.active]: selectedPart === part,
                    })}
                    onClick={() => onSelect(part)}
                    type="button"
                  >
                    <img alt={part} src={`/previews/${part}.png`} />
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
      {jointSelection &&
        blocks[jointSelection.selectedPart].joints.length > 1 && (
          <button type="button" onClick={onSwitch}>
            Switch
          </button>
        )}
      {level.length > 1 && (
        <button type="button" onClick={onRemove}>
          Remove last item
        </button>
      )}
      {canStart && (
        <button type="button" onClick={onStart}>
          Start
        </button>
      )}
    </header>
  );
}
