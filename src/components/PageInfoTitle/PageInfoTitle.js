import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import useStyles from "components/PageInfoTitle/PageInfoTitleStyles";
import InfoIcon from "@material-ui/icons/InfoOutlined";

const PageInfoTitle = ({ titleText, tooltipText }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.pageTitleContainer}>
        <h1 className={classes.titleText}>{titleText}</h1>
        <Tooltip className={classes.titleTooltip} title={tooltipText}>
          <InfoIcon className={classes.infoIcon} />
        </Tooltip>
      </div>
    </>
  );
};

export default PageInfoTitle;
