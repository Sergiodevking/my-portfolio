# Setting Up Bash Environment on Windows

There are several ways to use bash on Windows. Here are the best options:

## Option 1: Git Bash (Easiest - If you have Git installed)

If you have Git for Windows installed, you already have Git Bash!

### How to Use:

1. **Open Git Bash:**
   - Press `Win + R`
   - Type: `bash` or `git-bash`
   - Or search "Git Bash" in Start Menu

2. **Navigate to your project:**
   ```bash
   cd /d/mydata/portfolio
   ```
   Note: In Git Bash, Windows paths use forward slashes and drive letters are mounted (D: becomes /d/)

3. **Run npm commands:**
   ```bash
   npm install
   npm run dev
   ```

### Verify Git Bash is installed:
```bash
# In PowerShell, try:
bash --version
```

---

## Option 2: WSL (Windows Subsystem for Linux) - Recommended for Development

WSL gives you a full Linux environment on Windows.

### Installation Steps:

1. **Open PowerShell as Administrator:**
   - Right-click Start Menu → "Windows PowerShell (Admin)"

2. **Install WSL:**
   ```powershell
   wsl --install
   ```

3. **Restart your computer** (required after installation)

4. **After restart, WSL will complete setup automatically**

5. **Open WSL:**
   - Search "Ubuntu" or "WSL" in Start Menu
   - Or type `wsl` in PowerShell

6. **Install Node.js in WSL:**
   ```bash
   # Update package list
   sudo apt update
   
   # Install Node.js (using NodeSource repository for latest version)
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Verify
   node --version
   npm --version
   ```

7. **Navigate to your project:**
   ```bash
   # Access Windows files from WSL
   cd /mnt/d/mydata/portfolio
   
   # Or copy project to WSL home directory
   cp -r /mnt/d/mydata/portfolio ~/portfolio
   cd ~/portfolio
   ```

### Benefits of WSL:
- Full Linux environment
- Better for development
- Can use Linux tools
- Native bash experience

---

## Option 3: Use PowerShell with Bash-like Commands

You can use bash-style commands in PowerShell with aliases:

### Common Aliases (already work in PowerShell):
```powershell
# These work in PowerShell:
ls          # List files (alias for Get-ChildItem)
cd          # Change directory
pwd         # Print working directory
cat         # Display file (alias for Get-Content)
```

### For npm commands, PowerShell works fine:
```powershell
npm install
npm run dev
```

**You don't need bash just to run npm commands!** PowerShell works perfectly.

---

## Option 4: Install Git Bash (If you don't have Git)

1. **Download Git for Windows:**
   - Visit: https://git-scm.com/download/win
   - Download and install

2. **During installation:**
   - Check "Git Bash Here" option
   - This adds Git Bash to context menu

3. **Use Git Bash:**
   - Right-click in folder → "Git Bash Here"
   - Or search "Git Bash" in Start Menu

---

## Quick Comparison

| Option | Ease | Best For | Notes |
|--------|------|----------|-------|
| **PowerShell** | ⭐⭐⭐⭐⭐ | Quick npm commands | Already installed, works great |
| **Git Bash** | ⭐⭐⭐⭐ | Git users | Comes with Git, familiar bash |
| **WSL** | ⭐⭐⭐ | Serious development | Full Linux, best for dev work |

---

## Recommendation

**For your portfolio project:**

1. **If you just need to run npm commands:** Use **PowerShell** (you already have it!)
   ```powershell
   cd D:\mydata\portfolio
   npm install
   npm run dev
   ```

2. **If you prefer bash syntax:** Install **Git Bash** or use **WSL**

3. **For best development experience:** Use **WSL** with Node.js installed inside

---

## Using Bash Commands in Your Project

Once you have bash set up, you can use standard bash commands:

```bash
# Navigate
cd /d/mydata/portfolio    # Git Bash
cd /mnt/d/mydata/portfolio  # WSL

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Check Node version
node --version
npm --version
```

---

## Troubleshooting

### "bash: command not found"
- Make sure Git Bash or WSL is installed
- Restart terminal after installation

### "npm: command not found" in WSL
- Install Node.js inside WSL (see WSL section above)
- Node.js in Windows doesn't work in WSL

### Path issues in Git Bash
- Use forward slashes: `/d/mydata/portfolio`
- Drive letters become: `D:` → `/d/`

---

**Bottom line:** You can use PowerShell for npm commands, or install Git Bash/WSL if you prefer bash syntax!


