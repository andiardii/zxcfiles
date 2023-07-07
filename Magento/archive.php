<?php

// standard log
$writer = new \Zend\Log\Writer\Stream(BP . '/var/log/customlog.log');
$logger = new \Zend\Log\Logger();
$logger->addWriter($writer);
$logger->info();

// error log with auto delete feature
$lpath = '/var/log/ardi/customlog.log';
$upath = '/home/cloudpanel/htdocs/magento'.$lpath;
file_exists($upath) ? unlink($upath) : $upath;

$writer = new \Zend\Log\Writer\Stream(BP . $lpath);
$logger = new \Zend\Log\Logger();
$logger->addWriter($writer);
$logger->info('Find Here');

// for log collection
$collection->getSelect()->__toString();

// for log getList and get query sql
$searchResult->getSelectSql(true);

?>