<?php
/**
 * @file
 * elle_type.features.inc
 */

/**
 * Implements hook_node_info().
 */
function elle_type_node_info() {
  $items = array(
    'article' => array(
      'name' => t('New Dossier'),
      'base' => 'node_content',
      'description' => t('New Dossier and Gallery 文章在此建立'),
      'has_title' => '1',
      'title_label' => t('標題'),
      'help' => '',
    ),
    'fad' => array(
      'name' => t('FAD'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('標題'),
      'help' => '',
    ),
    'free_article' => array(
      'name' => t('Free Article'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('標題'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
