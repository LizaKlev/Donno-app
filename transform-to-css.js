const fs = require('fs')
const path = require('path')

/**
 * Convert camelCase or PascalCase to kebab-case
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Process global tokens and generate CSS variable definitions
 */
function processGlobalTokens(globalObj) {
  const cssVars = []

  for (const [category, values] of Object.entries(globalObj)) {
    const categoryKebab = toKebabCase(category)

    for (const [key, data] of Object.entries(values)) {
      if (data.value && data.type === 'color') {
        const varName = `--${categoryKebab}-${key}`
        cssVars.push(`  ${varName}: ${data.value};`)
      }
    }
  }

  return cssVars
}

/**
 * Resolve token references like {White.4} to CSS variable references
 */
function resolveTokenReference(value) {
  // Check if value is a reference (e.g., {White.4})
  const match = value.match(/^\{([^}]+)\}$/)
  if (match) {
    const ref = match[1]
    const parts = ref.split('.')
    const kebabParts = parts.map(toKebabCase)
    return `var(--${kebabParts.join('-')})`
  }
  return value
}

/**
 * Process semantic tokens and generate CSS variable definitions
 */
function processSemanticTokens(semanticObj) {
  const cssVars = []

  function traverse(obj, path = []) {
    for (const [key, value] of Object.entries(obj)) {
      if (value.value && value.type === 'color') {
        // Build the variable name from the path
        const fullPath = [...path, key].map(toKebabCase)
        const varName = `--semantic-${fullPath.join('-')}`
        const resolvedValue = resolveTokenReference(value.value)
        cssVars.push(`  ${varName}: ${resolvedValue};`)
      } else if (typeof value === 'object' && !value.value) {
        // Continue traversing
        traverse(value, [...path, key])
      }
    }
  }

  traverse(semanticObj)
  return cssVars
}

/**
 * Main function to transform JSON to CSS
 */
function transformJsonToCss(inputFile, outputFile) {
  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(inputFile, 'utf8'))

    // Process global and semantic tokens
    const globalVars = processGlobalTokens(jsonData.global || {})
    const semanticVars = processSemanticTokens(jsonData.Semantic || {})

    // Generate CSS output
    const css = `:root {
  /* Global Variables */
${globalVars.join('\n')}

  /* Semantic Variables */
${semanticVars.join('\n')}
}
`

    // Write to output file
    fs.writeFileSync(outputFile, css, 'utf8')
    console.log(`✓ CSS variables generated successfully!`)
    console.log(`  Input:  ${inputFile}`)
    console.log(`  Output: ${outputFile}`)
    console.log(`  Total variables: ${globalVars.length + semanticVars.length}`)
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
const inputFile = path.join(__dirname, 'tokens.json')
const outputFile = path.join(__dirname, 'variables.css')

transformJsonToCss(inputFile, outputFile)
