# Five Dysfunctions of a Team Assessment Tool
## เครื่องมือวัดจุดอ่อน 5 ประการของทีม

A bilingual (English/Thai) web-based team assessment tool with multi-user support, based on Patrick Lencioni's "Five Dysfunctions of a Team" model.

เครื่องมือประเมินทีมออนไลน์แบบสองภาษา (อังกฤษ/ไทย) รองรับหลายผู้ใช้ อิงตามแนวคิด "Five Dysfunctions of a Team" ของ Patrick Lencioni

---

## Features | คุณสมบัติ

### English
- ✅ **Bilingual Support**: Switch between English and Thai seamlessly
- ✅ **Two Assessment Modes**:
  - **Individual Mode**: Complete personal assessment with name tracking
  - **Team Summary Mode**: View aggregated results from all team members
- ✅ **5 Dysfunction Categories**: Complete assessment covering all five dysfunctions
  1. Absence of Trust
  2. Fear of Conflict
  3. Lack of Commitment
  4. Avoidance of Accountability
  5. Inattention to Results
- ✅ **25 Questions**: 5 questions per dysfunction for comprehensive evaluation
- ✅ **Multi-User Management**:
  - Save individual responses with names and timestamps
  - View all participants' assessments
  - Delete individual responses
  - View detailed results for each participant
- ✅ **Visual Results**:
  - Radar chart visualization
  - Team comparison chart showing all members
  - Individual and team average scores
- ✅ **Smart Recommendations**: Personalized improvement suggestions based on scores
- ✅ **Data Management**:
  - Auto-save to server (assessments.json file)
  - Export team data as JSON
  - Import data from other sessions/computers
  - Merge data from multiple sources
  - Network access for multiple users
- ✅ **Progress Tracking**: Visual progress bar during assessment
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices

### ไทย
- ✅ **รองรับสองภาษา**: สลับระหว่างภาษาอังกฤษและไทยได้อย่างราบรื่น
- ✅ **โหมดการประเมิน 2 แบบ**:
  - **โหมดรายบุคคล**: ทำแบบประเมินส่วนตัวพร้อมบันทึกชื่อ
  - **โหมดสรุปผลทีม**: ดูผลรวมจากสมาชิกทีมทั้งหมด
- ✅ **5 หมวดจุดอ่อน**: ครอบคลุมจุดอ่อนทั้ง 5 ประการ
  1. ขาดความไว้วางใจ
  2. กลัวความขัดแย้ง
  3. ขาดความมุ่งมั่น
  4. หลีกเลี่ยงความรับผิดชอบ
  5. ไม่ให้ความสำคัญกับผลลัพธ์
- ✅ **25 คำถาม**: 5 คำถามต่อจุดอ่อนเพื่อการประเมินที่ครบถ้วน
- ✅ **การจัดการหลายผู้ใช้**:
  - บันทึกคำตอบแต่ละคนพร้อมชื่อและเวลา
  - ดูแบบประเมินของผู้เข้าร่วมทั้งหมด
  - ลบคำตอบรายบุคคล
  - ดูผลลัพธ์โดยละเอียดของแต่ละคน
- ✅ **ผลลัพธ์แบบภาพ**:
  - กราฟเรดาร์แสดงผล
  - กราฟเปรียบเทียบทีมแสดงสมาชิกทั้งหมด
  - คะแนนรายบุคคลและค่าเฉลี่ยทีม
- ✅ **คำแนะนำอัจฉริยะ**: ข้อเสนอแนะการพัฒนาตามคะแนนที่ได้
- ✅ **การจัดการข้อมูล**:
  - บันทึกอัตโนมัติลงเซิร์ฟเวอร์ (ไฟล์ assessments.json)
  - ส่งออกข้อมูลทีมเป็น JSON
  - นำเข้าข้อมูลจากเซสชัน/คอมพิวเตอร์อื่น
  - รวมข้อมูลจากหลายแหล่ง
  - รองรับการเข้าถึงผ่านเครือข่ายสำหรับหลายผู้ใช้
- ✅ **ติดตามความคืบหน้า**: แถบแสดงความคืบหน้าระหว่างการประเมิน
- ✅ **การออกแบบตอบสนอง**: ใช้งานได้บนเดสก์ท็อป แท็บเล็ต และมือถือ

---

## Installation & Setup | การติดตั้งและตั้งค่า

### Prerequisites | สิ่งที่ต้องมี

#### English
- **Node.js** (version 14 or higher)
  - Download from: https://nodejs.org/

#### ไทย
- **Node.js** (เวอร์ชัน 14 ขึ้นไป)
  - ดาวน์โหลดจาก: https://nodejs.org/

---

### Installation Steps | ขั้นตอนการติดตั้ง

#### English
1. **Install Dependencies**:
   ```bash
   npm install
   ```
   This will install Express and CORS packages needed for the server.

2. **Start the Server**:
   ```bash
   npm start
   ```
   You should see:
   ```
   ╔════════════════════════════════════════════════════════╗
   ║   Five Dysfunctions Assessment Server                 ║
   ║                                                        ║
   ║   Server running at: http://localhost:3000            ║
   ║   Data file: assessments.json                         ║
   ║                                                        ║
   ║   Open http://localhost:3000 in your browser          ║
   ╚════════════════════════════════════════════════════════╝
   ```

3. **Access the Application**:
   - Open your web browser
   - Go to: `http://localhost:3000`
   - Start using the assessment tool!

4. **Data Storage**:
   - All assessments are saved in `assessments.json` file
   - Multiple users can access the same server on the network
   - Data persists across browser sessions

#### ไทย
1. **ติดตั้ง Dependencies**:
   ```bash
   npm install
   ```
   คำสั่งนี้จะติดตั้ง Express และ CORS ที่จำเป็นสำหรับเซิร์ฟเวอร์

2. **เริ่มเซิร์ฟเวอร์**:
   ```bash
   npm start
   ```
   คุณจะเห็น:
   ```
   ╔════════════════════════════════════════════════════════╗
   ║   Five Dysfunctions Assessment Server                 ║
   ║                                                        ║
   ║   Server running at: http://localhost:3000            ║
   ║   Data file: assessments.json                         ║
   ║                                                        ║
   ║   Open http://localhost:3000 in your browser          ║
   ╚════════════════════════════════════════════════════════╝
   ```

3. **เข้าใช้งานแอปพลิเคชัน**:
   - เปิดเว็บเบราว์เซอร์
   - ไปที่: `http://localhost:3000`
   - เริ่มใช้งานเครื่องมือประเมินได้เลย!

4. **การจัดเก็บข้อมูล**:
   - การประเมินทั้งหมดถูกบันทึกในไฟล์ `assessments.json`
   - ผู้ใช้หลายคนสามารถเข้าถึงเซิร์ฟเวอร์เดียวกันผ่านเครือข่าย
   - ข้อมูลจะไม่หายแม้ปิดเบราว์เซอร์

---

### Network Access | การเข้าถึงผ่านเครือข่าย

#### English
**For teams in the same office/network**:
1. Start the server on one computer (the "host")
2. Find the host computer's IP address:
   - Windows: Run `ipconfig` in Command Prompt
   - Mac/Linux: Run `ifconfig` in Terminal
3. Other team members can access from their computers using:
   - `http://[HOST_IP]:3000`
   - Example: `http://192.168.1.100:3000`
4. Everyone will share the same data file automatically

**Benefits**:
- ✅ Real-time collaboration
- ✅ No need to export/import
- ✅ All assessments in one place
- ✅ Perfect for co-located teams

#### ไทย
**สำหรับทีมที่อยู่ในสำนักงาน/เครือข่ายเดียวกัน**:
1. เริ่มเซิร์ฟเวอร์บนคอมพิวเตอร์เครื่องหนึ่ง (เครื่อง "host")
2. หา IP address ของเครื่อง host:
   - Windows: รันคำสั่ง `ipconfig` ใน Command Prompt
   - Mac/Linux: รันคำสั่ง `ifconfig` ใน Terminal
3. สมาชิกทีมคนอื่นสามารถเข้าถึงจากคอมพิวเตอร์ของตนโดยใช้:
   - `http://[HOST_IP]:3000`
   - ตัวอย่าง: `http://192.168.1.100:3000`
4. ทุกคนจะใช้ไฟล์ข้อมูลเดียวกันอัตโนมัติ

**ข้อดี**:
- ✅ ทำงานร่วมกันแบบเรียลไทม์
- ✅ ไม่ต้อง export/import
- ✅ การประเมินทั้งหมดอยู่ที่เดียว
- ✅ เหมาะสำหรับทีมที่อยู่ในที่เดียวกัน

---

## Deploy to Vercel | Deploy ขึ้น Vercel

### English

**For remote teams or production deployment**:

#### 1. Prerequisites
- GitHub account
- Vercel account (free tier available at https://vercel.com)
- Git installed on your computer

#### 2. Push to GitHub
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 3. Deploy on Vercel
1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings - click "Deploy"
5. Wait for deployment to complete (~2 minutes)

#### 4. Setup Vercel Postgres Database
1. In your Vercel project dashboard, go to "Storage" tab
2. Click "Create Database"
3. Select "Postgres"
4. Choose a database name and region
5. Click "Create"
6. Vercel will automatically set environment variables

#### 5. Initialize Database
After deployment, visit:
```
https://YOUR_PROJECT.vercel.app/api/init-db
```
You should see: `{"success": true, "message": "Database initialized successfully"}`

#### 6. Start Using
- Visit: `https://YOUR_PROJECT.vercel.app`
- Share the URL with your team
- Everyone can access from anywhere!

**Benefits**:
- ✅ Accessible from anywhere (internet required)
- ✅ No server maintenance needed
- ✅ Automatic HTTPS/SSL
- ✅ Free for small teams
- ✅ Automatic backups (Postgres)
- ✅ No need to keep your computer running

### ไทย

**สำหรับทีมระยะไกลหรือ production deployment**:

#### 1. สิ่งที่ต้องเตรียม
- บัญชี GitHub
- บัญชี Vercel (มี free tier ที่ https://vercel.com)
- ติดตั้ง Git บนคอมพิวเตอร์

#### 2. Push ขึ้น GitHub
```bash
# สร้าง git repository (ถ้ายังไม่ได้ทำ)
git init
git add .
git commit -m "Initial commit"

# สร้าง repository ใหม่บน GitHub และ push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 3. Deploy บน Vercel
1. ไปที่ https://vercel.com และ sign in
2. คลิก "Add New Project"
3. Import repository จาก GitHub ของคุณ
4. Vercel จะตรวจจับการตั้งค่าอัตโนมัติ - คลิก "Deploy"
5. รอการ deploy เสร็จสิ้น (~2 นาที)

#### 4. ตั้งค่า Vercel Postgres Database
1. ในแดชบอร์ดโปรเจคของคุณใน Vercel ไปที่แท็บ "Storage"
2. คลิก "Create Database"
3. เลือก "Postgres"
4. เลือกชื่อฐานข้อมูลและ region
5. คลิก "Create"
6. Vercel จะตั้งค่า environment variables อัตโนมัติ

#### 5. เริ่มต้นฐานข้อมูล
หลังจาก deploy เสร็จ เข้าไปที่:
```
https://YOUR_PROJECT.vercel.app/api/init-db
```
คุณจะเห็น: `{"success": true, "message": "Database initialized successfully"}`

#### 6. เริ่มใช้งาน
- เข้าไปที่: `https://YOUR_PROJECT.vercel.app`
- แชร์ URL ให้ทีมของคุณ
- ทุกคนเข้าถึงได้จากทุกที่!

**ข้อดี**:
- ✅ เข้าถึงได้จากทุกที่ (ต้องมีอินเทอร์เน็ต)
- ✅ ไม่ต้องดูแลเซิร์ฟเวอร์
- ✅ HTTPS/SSL อัตโนมัติ
- ✅ ฟรีสำหรับทีมเล็ก
- ✅ สำรองข้อมูลอัตโนมัติ (Postgres)
- ✅ ไม่ต้องเปิดคอมพิวเตอร์ทิ้งไว้

---

## How to Use | วิธีใช้งาน

### Quick Start | เริ่มต้นอย่างรวดเร็ว

#### English (Local Development)
1. **Start Server**: Run `npm start` in the project folder
2. **Open the Tool**: Go to `http://localhost:3000` in your web browser
3. **Choose Language**: Click the language toggle button (top-right)
4. **Select Mode**: Choose between "Individual Assessment" or "Team Dashboard" (top-left)

**Note**: If deployed on Vercel, simply visit your Vercel URL (e.g., `https://your-project.vercel.app`)

#### ไทย (การพัฒนาแบบ Local)
1. **เริ่มเซิร์ฟเวอร์**: รันคำสั่ง `npm start` ในโฟลเดอร์โปรเจค
2. **เปิดเครื่องมือ**: ไปที่ `http://localhost:3000` ในเว็บเบราว์เซอร์
3. **เลือกภาษา**: คลิกปุ่มสลับภาษา (มุมขวาบน)
4. **เลือกโหมด**: เลือก "ประเมินรายบุคคล" หรือ "แดชบอร์ดทีม" (มุมซ้ายบน)

**หมายเหตุ**: ถ้า deploy บน Vercel แล้ว เพียงแค่เข้าไปที่ URL ของ Vercel (เช่น `https://your-project.vercel.app`)

---

### Individual Assessment Mode | โหมดประเมินรายบุคคล

#### English
1. **Enter Your Name**: Type your name or ID in the input field
2. **Start Assessment**: Click "Start Assessment" button
3. **Answer Questions**: Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree)
   - Complete all 25 questions across 5 dysfunction categories
   - Progress bar shows your completion status
4. **Submit**: Click "Submit Assessment" when all questions are answered
5. **View Results**:
   - See your personal radar chart
   - Review your scores for each dysfunction
   - Read personalized recommendations for low-scoring areas
6. **Save**: Your response is automatically saved to server (assessments.json)
7. **New Assessment**: Click "New Assessment" to evaluate another team member

#### ไทย
1. **กรอกชื่อ**: พิมพ์ชื่อหรือรหัสของคุณในช่องกรอก
2. **เริ่มประเมิน**: คลิกปุ่ม "เริ่มประเมิน"
3. **ตอบคำถาม**: ให้คะแนนแต่ละข้อความจาก 1 (ไม่เห็นด้วยอย่างยิ่ง) ถึง 5 (เห็นด้วยอย่างยิ่ง)
   - ตอบคำถามทั้ง 25 ข้อใน 5 หมวดจุดอ่อน
   - แถบความคืบหน้าแสดงสถานะการทำแบบประเมิน
4. **ส่งแบบประเมิน**: คลิก "ส่งแบบประเมิน" เมื่อตอบคำถามครบทุกข้อ
5. **ดูผลลัพธ์**:
   - ดูกราฟเรดาร์ส่วนตัว
   - ทบทวนคะแนนแต่ละจุดอ่อน
   - อ่านคำแนะนำการพัฒนาสำหรับด้านที่คะแนนต่ำ
6. **บันทึก**: คำตอบของคุณถูกบันทึกอัตโนมัติลงเซิร์ฟเวอร์ (assessments.json)
7. **ประเมินใหม่**: คลิก "ประเมินใหม่" เพื่อประเมินสมาชิกทีมคนอื่น

---

### Team Summary Mode | โหมดสรุปผลทีม

#### English
1. **Switch to Team Mode**: Click "Team Summary" button (top-left)
2. **View Team Statistics**:
   - See total number of participants
   - View team average scores for each dysfunction
3. **Compare Participants**:
   - Radar chart displays all team members' scores
   - Team average shown as red dashed line
   - Each member has a unique color
4. **Review Recommendations**: See improvement suggestions based on team averages
5. **Manage Participants**:
   - View list of all participants with timestamps
   - Click "View" to see individual detailed results
   - Click "Delete" to remove a participant's response
6. **Export/Import Data**:
   - **Export**: Save all team data as JSON file for backup or sharing
   - **Import**: Load data from another session or combine with current data
7. **Cross-Device Collaboration**:
   - Export data from Computer A
   - Import on Computer B to merge all team responses

#### ไทย
1. **สลับเป็นโหมดทีม**: คลิกปุ่ม "สรุปผลทีม" (มุมซ้ายบน)
2. **ดูสถิติทีม**:
   - ดูจำนวนผู้เข้าร่วมทั้งหมด
   - ดูคะแนนเฉลี่ยทีมสำหรับแต่ละจุดอ่อน
3. **เปรียบเทียบผู้เข้าร่วม**:
   - กราฟเรดาร์แสดงคะแนนสมาชิกทีมทั้งหมด
   - ค่าเฉลี่ยทีมแสดงเป็นเส้นประสีแดง
   - สมาชิกแต่ละคนมีสีเฉพาะ
4. **ทบทวนคำแนะนำ**: ดูข้อเสนอแนะการพัฒนาตามค่าเฉลี่ยทีม
5. **จัดการผู้เข้าร่วม**:
   - ดูรายชื่อผู้เข้าร่วมทั้งหมดพร้อมเวลา
   - คลิก "ดูรายละเอียด" เพื่อดูผลลัพธ์แต่ละคน
   - คลิก "ลบ" เพื่อลบคำตอบของผู้เข้าร่วม
6. **ส่งออก/นำเข้าข้อมูล**:
   - **ส่งออก**: บันทึกข้อมูลทีมทั้งหมดเป็นไฟล์ JSON เพื่อสำรองหรือแชร์
   - **นำเข้า**: โหลดข้อมูลจากเซสชันอื่นหรือรวมกับข้อมูลปัจจุบัน
7. **การทำงานร่วมกันข้ามอุปกรณ์**:
   - ส่งออกข้อมูลจากคอมพิวเตอร์ A
   - นำเข้าในคอมพิวเตอร์ B เพื่อรวมคำตอบทีมทั้งหมด

---

## Use Cases | กรณีการใช้งาน

### Scenario 1: Small Team in One Location | ทีมเล็กที่อยู่ที่เดียวกัน

#### English
1. Open the tool on a shared computer/tablet
2. Each team member takes turns completing the assessment
3. Switch to Team Summary mode to review results together
4. Discuss findings and create improvement plan

#### ไทย
1. เปิดเครื่องมือในคอมพิวเตอร์/แท็บเล็ตที่ใช้ร่วมกัน
2. สมาชิกทีมแต่ละคนผลัดกันทำแบบประเมิน
3. สลับไปโหมดสรุปผลทีมเพื่อดูผลลัพธ์ร่วมกัน
4. อภิปรายผลการประเมินและสร้างแผนพัฒนา

---

### Scenario 2: Remote/Distributed Team | ทีมที่ทำงานระยะไกล

#### English
1. **Facilitator**: Opens tool and shares link to `index.html` (host on web server if needed)
2. **Each member**: Completes assessment on their own device
3. **Each member**: Exports their data (Export Data button)
4. **Facilitator**: Collects all JSON files
5. **Facilitator**: Imports each file one by one (data merges automatically)
6. **Facilitator**: Shares screen to show Team Summary results
7. **Team**: Discusses results together via video call

#### ไทย
1. **ผู้ประสานงาน**: เปิดเครื่องมือและแชร์ลิงก์ `index.html` (โฮสต์บน web server ถ้าจำเป็น)
2. **สมาชิกแต่ละคน**: ทำแบบประเมินบนอุปกรณ์ของตนเอง
3. **สมาชิกแต่ละคน**: ส่งออกข้อมูลของตน (ปุ่มส่งออกข้อมูล)
4. **ผู้ประสานงาน**: รวบรวมไฟล์ JSON ทั้งหมด
5. **ผู้ประสานงาน**: นำเข้าแต่ละไฟล์ทีละไฟล์ (ข้อมูลจะรวมกันอัตโนมัติ)
6. **ผู้ประสานงาน**: แชร์หน้าจอเพื่อแสดงผลสรุปทีม
7. **ทีม**: อภิปรายผลลัพธ์ร่วมกันผ่านวิดีโอคอล

---

### Scenario 3: Regular Team Health Checks | การตรวจสุขภาพทีมเป็นประจำ

#### English
1. Conduct assessment quarterly (e.g., Q1, Q2, Q3, Q4)
2. Export data after each quarter with clear filename: `team-2024-Q1.json`
3. Compare results over time by importing previous quarters' data
4. Track improvement trends across dysfunctions
5. Celebrate progress and adjust improvement strategies

#### ไทย
1. ทำการประเมินทุกไตรมาส (เช่น Q1, Q2, Q3, Q4)
2. ส่งออกข้อมูลหลังแต่ละไตรมาสด้วยชื่อไฟล์ที่ชัดเจน: `team-2024-Q1.json`
3. เปรียบเทียบผลลัพธ์ตลอดเวลาโดยนำเข้าข้อมูลไตรมาสก่อนหน้า
4. ติดตามแนวโน้มการพัฒนาในแต่ละจุดอ่อน
5. เฉลิมฉลองความคืบหน้าและปรับกลยุทธ์การพัฒนา

---

## Understanding the Results | การทำความเข้าใจผลลัพธ์

### Scoring Scale | มาตรวัดคะแนน

#### English
- **4.5 - 5.0**: Excellent - This dysfunction is well-managed
- **3.5 - 4.4**: Good - Minor improvements needed
- **2.5 - 3.4**: Fair - Significant improvement required
- **1.5 - 2.4**: Poor - Major focus area needed
- **1.0 - 1.4**: Critical - Immediate attention required

**Note**: Higher scores are better! The questions are phrased positively, so agreeing means your team is performing well.

#### ไทย
- **4.5 - 5.0**: ดีเยี่ยม - จุดอ่อนนี้ได้รับการจัดการที่ดี
- **3.5 - 4.4**: ดี - ต้องการการปรับปรุงเล็กน้อย
- **2.5 - 3.4**: พอใช้ - ต้องการการปรับปรุงที่สำคัญ
- **1.5 - 2.4**: อ่อน - ต้องการความสนใจเป็นพิเศษ
- **1.0 - 1.4**: วิกฤต - ต้องการความสนใจทันที

**หมายเหตุ**: คะแนนสูงหมายถึงดีกว่า! คำถามเขียนในเชิงบวก ดังนั้นการเห็นด้วยหมายความว่าทีมของคุณทำงานได้ดี

---

### The Five Dysfunctions Pyramid | พีระมิดจุดอ่อน 5 ประการ

The dysfunctions are hierarchical - each level builds upon the previous one:

จุดอ่อนมีลำดับขั้น - แต่ละระดับสร้างบนระดับก่อนหน้า:

```
                    RESULTS
                    ผลลัพธ์
                       ↑
                 ACCOUNTABILITY
                 ความรับผิดชอบ
                       ↑
                  COMMITMENT
                  ความมุ่งมั่น
                       ↑
                   CONFLICT
                   ความขัดแย้ง
                       ↑
                    TRUST
                  ความไว้วางใจ
               (Foundation/ฐานราก)
```

#### 1. Absence of Trust | ขาดความไว้วางใจ (Foundation)

**English**: Team members must be comfortable being vulnerable with one another. Without trust, teams waste time and energy managing behaviors and interactions.

**Key behaviors**:
- Admitting mistakes and weaknesses
- Asking for help
- Accepting feedback
- Apologizing when wrong

**ไทย**: สมาชิกทีมต้องรู้สึกสบายใจที่จะแสดงความอ่อนแอต่อกัน หากปราศจากความไว้วางใจ ทีมจะเสียเวลาและพลังงานในการจัดการพฤติกรรมและปฏิสัมพันธ์

**พฤติกรรมสำคัญ**:
- ยอมรับความผิดพลาดและจุดอ่อน
- ขอความช่วยเหลือ
- ยอมรับข้อเสนอแนะ
- ขอโทษเมื่อทำผิด

---

#### 2. Fear of Conflict | กลัวความขัดแย้ง

**English**: Teams must engage in unfiltered, passionate debate around ideas. Artificial harmony is actually a sign of dysfunction.

**Key behaviors**:
- Engaging in passionate debates
- Voicing controversial opinions
- Challenging each other's ideas
- Having compelling meetings

**ไทย**: ทีมต้องมีส่วนร่วมในการอภิปรายความคิดอย่างตรงไปตรงมาและมีชีวิตชีวา ความสามัคคีเทียมเป็นสัญญาณของความผิดปกติจริงๆ

**พฤติกรรมสำคัญ**:
- มีส่วนร่วมในการอภิปรายอย่างมีชีวิตชีวา
- แสดงความคิดเห็นที่ขัดแย้ง
- ท้าทายความคิดของกันและกัน
- มีการประชุมที่น่าสนใจ

---

#### 3. Lack of Commitment | ขาดความมุ่งมั่น

**English**: Team members must buy into decisions even when they disagree. Clarity and buy-in are more important than consensus.

**Key behaviors**:
- Clear action items from meetings
- Supporting decisions after they're made
- Moving forward without perfect information
- Aligning on key decisions

**ไทย**: สมาชิกทีมต้องยอมรับการตัดสินใจแม้ว่าจะไม่เห็นด้วย ความชัดเจนและการยอมรับสำคัญกว่าความเห็นพ้องต้องกัน

**พฤติกรรมสำคัญ**:
- รายการปฏิบัติที่ชัดเจนจากการประชุม
- สนับสนุนการตัดสินใจหลังจากตัดสินใจแล้ว
- ดำเนินการต่อโดยไม่ต้องการข้อมูลที่สมบูรณ์แบบ
- จัดแนวในการตัดสินใจสำคัญ

---

#### 4. Avoidance of Accountability | หลีกเลี่ยงความรับผิดชอบ

**English**: Team members must hold one another accountable for behaviors and performance. Peer pressure is the most effective tool.

**Key behaviors**:
- Confronting peers about issues
- Questioning approaches
- Maintaining high standards
- Addressing behavioral problems directly

**ไทย**: สมาชิกทีมต้องถือความรับผิดชอบซึ่งกันและกันในเรื่องพฤติกรรมและผลงาน แรงกดดันจากเพื่อนเป็นเครื่องมือที่มีประสิทธิภาพที่สุด

**พฤติกรรมสำคัญ**:
- เผชิญหน้ากับเพื่อนเกี่ยวกับปัญหา
- ตั้งคำถามเกี่ยวกับแนวทาง
- รักษามาตรฐานสูง
- จัดการกับปัญหาพฤติกรรมโดยตรง

---

#### 5. Inattention to Results | ไม่ให้ความสำคัญกับผลลัพธ์

**English**: Team success must be the ultimate goal. Individual recognition and ego must be secondary to team results.

**Key behaviors**:
- Prioritizing team goals
- Celebrating collective achievements
- Making sacrifices for team success
- Measuring success by team outcomes

**ไทย**: ความสำเร็จของทีมต้องเป็นเป้าหมายสูงสุด การยอมรับและอัตตาส่วนบุคคลต้องมาเป็นอันดับรองจากผลลัพธ์ทีม

**พฤติกรรมสำคัญ**:
- ให้ความสำคัญกับเป้าหมายทีม
- เฉลิมฉลองความสำเร็จร่วมกัน
- เสียสละเพื่อความสำเร็จของทีม
- วัดความสำเร็จจากผลลัพธ์ทีม

---

## Technical Details | รายละเอียดทางเทคนิค

### Technology Stack | เทคโนโลยีที่ใช้

**Frontend**:
- **React 18**: UI framework
- **Chart.js**: Data visualization (radar charts)
- **Babel Standalone**: JSX transformation
- **Pure CSS**: Styling with gradients and animations

**Backend**:
- **Node.js + Express**: Local development server
- **Vercel Serverless Functions**: Production deployment
- **Vercel Postgres**: Database (PostgreSQL)
- **@vercel/postgres**: Database driver
- **CORS**: Cross-origin resource sharing

### Data Storage | การจัดเก็บข้อมูล

**Local Development**:
- **Location**: Server file system
- **File**: `assessments.json`
- **Format**: JSON array of assessment objects

**Production (Vercel)**:
- **Database**: Vercel Postgres (PostgreSQL)
- **Table**: `assessments`
- **Persistence**: Permanent storage with automatic backups
- **Security**: Environment variables for credentials
- **Scalability**: Can handle multiple concurrent users

### Data Structure | โครงสร้างข้อมูล

**JSON Format** (used in API and file storage):
```json
[
  {
    "id": "1234567890",
    "name": "John Doe",
    "date": "2024-01-15T10:30:00.000Z",
    "answers": {
      "0-0": "4",
      "0-1": "5",
      ...
    },
    "scores": [
      {
        "name": "Absence of Trust",
        "score": "4.2",
        "percentage": "84"
      },
      ...
    ]
  }
]
```

**Database Schema** (Vercel Postgres):
```sql
CREATE TABLE assessments (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    answers TEXT NOT NULL,      -- JSON string
    scores TEXT NOT NULL,        -- JSON string
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### API Endpoints | API Endpoints

**GET /api/assessments**
- Get all assessments
- Returns: Array of assessment objects

**POST /api/assessments**
- Create new assessment
- Body: Assessment object (id, name, date, answers, scores)
- Returns: Success response with created assessment

**DELETE /api/delete-assessment?id={id}**
- Delete assessment by ID
- Query param: id (assessment ID)
- Returns: Success response

**POST /api/import-assessments**
- Import multiple assessments (merges, no duplicates)
- Body: Array of assessment objects
- Returns: Success response with count of added assessments

**GET /api/init-db**
- Initialize database (creates table if not exists)
- Returns: Success response with current assessment count

### Browser Support | เบราว์เซอร์ที่รองรับ
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Requirements**: Must support ES6, localStorage, and Canvas API

---

## Best Practices | แนวทางปฏิบัติที่ดีที่สุด

### For Facilitators | สำหรับผู้ประสานงาน

#### English
1. **Set the Context**: Explain the purpose before starting
2. **Ensure Anonymity**: Consider using IDs instead of real names if team is sensitive
3. **Create Safety**: Emphasize that results are for learning, not punishment
4. **Facilitate Discussion**: Use results as conversation starters, not final judgments
5. **Action Planning**: Don't just review scores - create concrete improvement plans
6. **Regular Cadence**: Assess quarterly or bi-annually to track progress
7. **Backup Data**: Export and save JSON files regularly

#### ไทย
1. **สร้างบริบท**: อธิบายวัตถุประสงค์ก่อนเริ่ม
2. **รักษาความเป็นส่วนตัว**: พิจารณาใช้รหัสแทนชื่อจริงถ้าทีมละเอียดอ่อน
3. **สร้างความปลอดภัย**: เน้นว่าผลลัพธ์เพื่อการเรียนรู้ ไม่ใช่การลงโทษ
4. **อำนวยการอภิปราย**: ใช้ผลลัพธ์เป็นจุดเริ่มต้นการสนทนา ไม่ใช่คำตัดสินสุดท้าย
5. **วางแผนปฏิบัติการ**: อย่าแค่ดูคะแนน - สร้างแผนพัฒนาที่เป็นรูปธรรม
6. **ความสม่ำเสมอ**: ประเมินทุกไตรมาสหรือทุกครึ่งปีเพื่อติดตามความคืบหน้า
7. **สำรองข้อมูล**: ส่งออกและบันทึกไฟล์ JSON เป็นประจำ

---

### For Participants | สำหรับผู้เข้าร่วม

#### English
1. **Be Honest**: Answer based on actual behavior, not aspirational behavior
2. **Current State**: Reflect on recent months (last 2-3 months)
3. **Specific Team**: Think about your current team, not past teams
4. **No Right Answers**: Higher scores aren't always better - honesty is key
5. **Reflect Before Answering**: Take time to think about each question
6. **Complete in One Session**: Don't start and stop - complete all 25 questions
7. **Discuss Results**: Be willing to talk about your perspective with the team

#### ไทย
1. **ซื่อสัตย์**: ตอบตามพฤติกรรมจริง ไม่ใช่พฤติกรรมที่หวังไว้
2. **สถานะปัจจุบัน**: สะท้อนเดือนที่ผ่านมา (2-3 เดือนล่าสุด)
3. **ทีมเฉพาะ**: คิดถึงทีมปัจจุบัน ไม่ใช่ทีมในอดีต
4. **ไม่มีคำตอบที่ถูกต้อง**: คะแนนสูงไม่ได้ดีเสมอไป - ความซื่อสัตย์คือกุญแจ
5. **ใคร่ครวญก่อนตอบ**: ใช้เวลาคิดเกี่ยวกับแต่ละคำถาม
6. **ทำให้เสร็จในครั้งเดียว**: อย่าเริ่มแล้วหยุด - ตอบคำถามครบทั้ง 25 ข้อ
7. **อภิปรายผลลัพธ์**: เต็มใจที่จะพูดคุยเกี่ยวกับมุมมองของคุณกับทีม

---

## Troubleshooting | การแก้ไขปัญหา

### Data Not Saving | ข้อมูลไม่บันทึก

**English**:
- Check if browser allows localStorage (some privacy modes block it)
- Check browser console for errors (F12 → Console tab)
- Try different browser
- Ensure you're not in Incognito/Private mode

**ไทย**:
- ตรวจสอบว่า browser อนุญาต localStorage (โหมดความเป็นส่วนตัวบางอย่างบล็อก)
- ตรวจสอบ browser console สำหรับข้อผิดพลาด (F12 → แท็บ Console)
- ลองใช้ browser อื่น
- ตรวจสอบว่าคุณไม่ได้อยู่ในโหมด Incognito/Private

---

### Data Lost After Closing Browser | ข้อมูลหายหลังปิด Browser

**English**:
- This is normal for Private/Incognito mode
- **Solution**: Export data before closing browser
- Use regular browser mode for persistent storage

**ไทย**:
- นี่เป็นเรื่องปกติสำหรับโหมด Private/Incognito
- **วิธีแก้**: ส่งออกข้อมูลก่อนปิด browser
- ใช้โหมด browser ปกติสำหรับการจัดเก็บถาวร

---

### Can't Import Data | ไม่สามารถนำเข้าข้อมูล

**English**:
- Ensure JSON file is valid (not corrupted)
- Check file was exported from this tool (correct format)
- Try opening JSON in text editor to verify structure
- Re-export from source if file is damaged

**ไทย**:
- ตรวจสอบว่าไฟล์ JSON ถูกต้อง (ไม่เสียหาย)
- ตรวจสอบไฟล์ถูกส่งออกจากเครื่องมือนี้ (รูปแบบถูกต้อง)
- ลองเปิด JSON ใน text editor เพื่อตรวจสอบโครงสร้าง
- ส่งออกใหม่จากต้นทางถ้าไฟล์เสียหาย

---

### Chart Not Displaying | กราฟไม่แสดง

**English**:
- Ensure internet connection (Chart.js loaded from CDN)
- Check browser console for errors
- Try refreshing the page (F5)
- Ensure you completed the assessment first

**ไทย**:
- ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต (Chart.js โหลดจาก CDN)
- ตรวจสอบ browser console สำหรับข้อผิดพลาด
- ลองรีเฟรชหน้าเว็บ (F5)
- ตรวจสอบว่าคุณทำแบบประเมินเสร็จแล้ว

---

## FAQ | คำถามที่พบบ่อย

### English

**Q: Is my data secure?**
A: Yes. All data is stored locally in your browser's localStorage. Nothing is sent to any server. However, anyone with access to your computer can view the data.

**Q: Can I use this offline?**
A: Partially. After first load (which requires internet for CDN libraries), the tool can work offline. However, if you refresh while offline, CDN scripts won't load.

**Q: How many people can take the assessment?**
A: Unlimited. The tool can handle as many participants as your browser's localStorage allows (typically several MB).

**Q: Can I edit responses after submission?**
A: No. You must delete and retake the assessment. This ensures data integrity.

**Q: What if two people have the same name?**
A: Each assessment gets a unique timestamp ID, so duplicate names are allowed. They'll be distinguished by date/time.

**Q: Can I translate to another language?**
A: Yes! The tool is designed for bilingual support. You can modify the `translations` object in the code to add more languages.

**Q: Can I customize the questions?**
A: Yes, but this requires editing the HTML file. The questions are in the `translations` object within the JavaScript code.

**Q: Is this the official Lencioni assessment?**
A: No. This is an educational tool inspired by Lencioni's model. For official assessments, visit The Table Group website.

---

### ไทย

**ถ: ข้อมูลของฉันปลอดภัยไหม?**
ต: ปลอดภัย ข้อมูลทั้งหมดถูกเก็บในเครื่องใน localStorage ของ browser ไม่มีอะไรถูกส่งไปยังเซิร์ฟเวอร์ใดๆ อย่างไรก็ตาม ใครก็ตามที่เข้าถึงคอมพิวเตอร์ของคุณได้สามารถดูข้อมูลได้

**ถ: สามารถใช้แบบออฟไลน์ได้ไหม?**
ต: บางส่วน หลังจากโหลดครั้งแรก (ซึ่งต้องการอินเทอร์เน็ตสำหรับ CDN libraries) เครื่องมือสามารถทำงานออฟไลน์ได้ อย่างไรก็ตาม หากคุณรีเฟรชขณะออฟไลน์ CDN scripts จะโหลดไม่ได้

**ถ: มีคนสามารถทำแบบประเมินได้กี่คน?**
ต: ไม่จำกัด เครื่องมือสามารถจัดการผู้เข้าร่วมได้มากเท่าที่ localStorage ของ browser อนุญาต (โดยทั่วไปหลาย MB)

**ถ: สามารถแก้ไขคำตอบหลังส่งได้ไหม?**
ต: ไม่ได้ คุณต้องลบและทำแบบประเมินใหม่ นี่เพื่อให้แน่ใจว่าข้อมูลมีความสมบูรณ์

**ถ: ถ้าคน 2 คนมีชื่อเดียวกันล่ะ?**
ต: แต่ละการประเมินได้รับ timestamp ID ที่ไม่ซ้ำกัน ดังนั้นชื่อซ้ำกันได้ จะแยกความแตกต่างด้วยวันที่/เวลา

**ถ: สามารถแปลเป็นภาษาอื่นได้ไหม?**
ต: ได้! เครื่องมือออกแบบมาเพื่อรองรับสองภาษา คุณสามารถแก้ไข object `translations` ในโค้ดเพื่อเพิ่มภาษาอื่นได้

**ถ: สามารถปรับแต่งคำถามได้ไหม?**
ต: ได้ แต่ต้องแก้ไขไฟล์ HTML คำถามอยู่ใน object `translations` ภายใน JavaScript code

**ถ: นี่เป็นแบบประเมินอย่างเป็นทางการของ Lencioni หรือไม่?**
ต: ไม่ใช่ นี่เป็นเครื่องมือการศึกษาที่ได้รับแรงบันดาลใจจากแนวคิดของ Lencioni สำหรับการประเมินอย่างเป็นทางการ เยี่ยมชมเว็บไซต์ The Table Group

---

## License & Credits | ใบอนุญาตและเครดิต

### English
- **Model**: Based on Patrick Lencioni's "The Five Dysfunctions of a Team" (2002)
- **Purpose**: Educational and team development tool
- **License**: Free to use for team development purposes
- **No Warranty**: This tool is provided "as-is" without warranty
- **Not Official**: Not affiliated with or endorsed by Patrick Lencioni or The Table Group

**Recommended Reading**: "The Five Dysfunctions of a Team" by Patrick Lencioni

### ไทย
- **แนวคิด**: อิงจาก "The Five Dysfunctions of a Team" ของ Patrick Lencioni (2002)
- **วัตถุประสงค์**: เครื่องมือการศึกษาและการพัฒนาทีม
- **ใบอนุญาต**: ใช้งานฟรีเพื่อวัตถุประสงค์การพัฒนาทีม
- **ไม่มีการรับประกัน**: เครื่องมือนี้ให้บริการ "ตามสภาพ" โดยไม่มีการรับประกัน
- **ไม่ใช่อย่างเป็นทางการ**: ไม่ได้เกี่ยวข้องหรือรับรองโดย Patrick Lencioni หรือ The Table Group

**แนะนำให้อ่าน**: "The Five Dysfunctions of a Team" โดย Patrick Lencioni

---

## Support | การสนับสนุน

### English
For questions or issues:
1. Review this README thoroughly
2. Check the Troubleshooting section
3. Inspect browser console for errors (F12 → Console)
4. Refer to Patrick Lencioni's original work for model interpretation

### ไทย
สำหรับคำถามหรือปัญหา:
1. อ่าน README นี้อย่างละเอียด
2. ตรวจสอบส่วนการแก้ไขปัญหา
3. ตรวจสอบ browser console สำหรับข้อผิดพลาด (F12 → Console)
4. อ้างอิงงานต้นฉบับของ Patrick Lencioni เพื่อการตีความแนวคิด

---

**Last Updated**: 2025
**Version**: 3.0 (Node.js Backend with Real-time Collaboration)

**Built with ❤️ for better teams | สร้างด้วย ❤️ เพื่อทีมที่ดีขึ้น**
